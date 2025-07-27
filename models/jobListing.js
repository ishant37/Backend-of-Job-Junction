const mongoose = require("mongoose");

const jobListingSchema = new mongoose.Schema({
  company: String,
  title: String,
  sector: String, // e.g., IT, Consulting, Finance, Agriculture
  location: String,
  experience: String,
  salary: String,
  description: String,
  datePosted: { type: Date, default: Date.now },
  reviews: Number,
  rating: Number,
  employability: String,
});

const JobListing = mongoose.model("JobListing", jobListingSchema);

module.exports = JobListing;
