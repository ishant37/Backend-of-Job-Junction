const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  idtype: {
    type: String,
  },
  idnumber: {
    type: String,
  },
  workstatus: String,
  location: String,
  gender: String,
  dob: Date,
  education: String,
  certifications: String,
  skills: String,
  achievements: String,
  github: String,
  terms: {
    type: Boolean,
    required: true,
  },
});

// Create the model from the schema and export it
const User = mongoose.model("User", userSchema);
module.exports = User;
