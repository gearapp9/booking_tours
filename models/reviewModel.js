const mongoose = require("mongoose");
const Tour = require("./tourModel");

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: [true, "Review must belong to a tour"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true }
  // }
);

//populating user on review
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

//calculating review's avgRating and nbrRating for every tour
reviewSchema.statics.calcAvgRating = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: "$tour",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  console.log(tourId);
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

//calling the static method (calcAvgRating) after the query is executed when review is created
reviewSchema.post("save", async function () {
  //this.contructor points to the current review
  await this.constructor.calcAvgRating(this.tour);
});

//the next two middleware are for (calcAvgRating) when review is updated or deleted
//we need to save the doc so we can call (calcAvgRating) after quey is executed on post
reviewSchema.pre(/^findOneAnd/, async function (next) {
  //mongodb doesn't not allow for dupplicate queries to be executed
  //this happens when updating the review
  this.doc = await this.clone().findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.doc.constructor.calcAvgRating(this.doc.tour);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
