const multer = require("multer");
const sharp = require("sharp");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const handleFactory = require("./handleFactory");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "assets/images/users");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("please upload a vild image", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPhoto = upload.single("photo");
exports.resizePhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.fileName = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`assets/users/${req.file.fileName}`);

  next();
});

const filteredFields = (obj, ...fields) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (fields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllUser = handleFactory.getAll(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }
  //filtering the body to only name an email
  const allowBodyValues = filteredFields(req.body, "name", "email");
  if (req.file) allowBodyValues.photo = req.file.fileName;

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    allowBodyValues,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      doc: updatedUser,
    },
  });
});

//setting the user to inactive
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getUser = handleFactory.getOne(User);
exports.getAll = handleFactory.getAll(User);

exports.updateUser = handleFactory.updateOne(User);
exports.createUser = handleFactory.createOne(User);
exports.deleteUser = handleFactory.deleteOne(User);
