class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //filtering search result by document properties only
  filter() {
    const queryObj = { ...this.queryString };
    const exclude = ["page", "sort", "fields", "limit"];
    exclude.forEach((el) => delete queryObj[el]);

    // prettier-ignore
    const queryStr = JSON.stringify(queryObj).replace(/\b(gte|gt|lte|lt)\b/g,(match) => `$${match}`);

    //chainig queries every time we are doing a special filtering 
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  //sorting search result
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");//this line will give the following exmaple:?sort=-price,duration =>-price duration 
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }


  //specifying which fields to earch for or not
  selectFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }


  page(){
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = ApiFeatures;
