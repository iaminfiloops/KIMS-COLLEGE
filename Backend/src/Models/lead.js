const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v); // Validate email using validator package
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  course: {
    type: String,
    required: [true, "Please enter interested course"],
    trim: true,
  },
  college: {
    type: String,
    trim: true,
  },
  place: {
    type: String,
    required: [true, "Please enter the place"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number"],
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Assuming a 10 digit phone number format
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

module.exports = mongoose.model("Lead", userSchema);
