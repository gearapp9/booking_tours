const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//encrypting password
userSchema.pre("save", async function (next) {
  //run this function only if the password has changed
  if (!this.isModified("password")) return next();

  //hashing password with coast of 12
  this.password = await bcrypt.hash(this.password, 12);

  //deleting passwordConfirm field
  this.passwordConfirm = undefined;

  next();
});

//setting passwordChangedAt 
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next()

    //waiting for the JWtokent to be created cause it may take longer
    this.passwordChangedAt = Date.now() - 1000;
  next();
});

//checking if passwords are correct for login in
userSchema.methods.correctPassword = async (candidatePassword, password) => {
  return await bcrypt.compare(candidatePassword, password);
};

//checking if user changed his pass after token was issued
//if true means that the password is changed after jwt was issued so it won't be valid
userSchema.methods.passwodChangedAfter = function (JWTtime) {
  if (this.passwordChangedAt) {
    const changedTime = parseInt(this.passwodChangedAfter.getTime() / 1000, 10);

    return JWTtime < changedTime;
  }

  return false;
};

//create user password reset tokent

userSchema.methods.createUserPasswordResetToken = function () {
  //creating the string
  const token = crypto.randomBytes(92).toString("hex");

  //hashing the string
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  //set the token to be expired after 10min
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
