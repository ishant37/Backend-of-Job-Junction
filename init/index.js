const mongoose = require("mongoose");
const initData = require("./data.js");
const JobListing = require("../models/jobListing.js"); //why .. two dots, search for it.

const MONGO_URL = "mongodb://127.0.0.1:27017/jobjunction";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await JobListing.deleteMany({}); //just to delete any previous data.
//   await JobListing.insertMany(initData.data); //since initData is itself an object and we have to access key- "data";
//   console.log("Data was initialised");
// };

const initDB = async () => {
  await JobListing.deleteMany({}); // Clear any previous data
  const insertedJobs = await JobListing.insertMany(initData.data);
  console.log("Inserted jobs:", insertedJobs); // Log inserted data
};

initDB();
