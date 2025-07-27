const express = require("express");
const mongoose = require("mongoose");
const JobListing = require("./models/jobListing.js"); // Import the JobListing model4
const User = require("./models/userModel.js"); // Importing the userModel model
const path = require("path");
const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));
// Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017/jobjunction")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

const MONGO_URL = "mongodb://127.0.0.1:27017/jobjunction";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home2.html"));
});

// app.get("/afterlogin", (req, res) => {
//   res.render("home.ejs");
// });

//AFTER LOGIN PAGE
app.get("/afterlogin", async (req, res) => {
  try {
    // Fetch the user data from the database
    const user = await User.find({}); // Or use another method if not using userId
    // console.log(user);
    console.log(user[0].name);
    if (user) {
      // Render the home.ejs and pass the user's name
      res.render("home.ejs", { username: user[0].name });
    } else {
      // If user is not found, redirect to login or show an error
      res.status(404).send("User not found. Please log in again.");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal server error.");
  }
});

app.get("/register", (req, res) => {
  res.render("forms.ejs");
});

// posting for a user:
app.post("/register", async (req, res) => {
  try {
    // Convert the "on" value from the checkbox to a boolean
    const termsAccepted = req.body.terms === "on";

    // Create a new user using form data
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // Ensure password is hashed in production
      mobileno: req.body.mobileno,
      otp: req.body.otp,
      idtype: req.body.idtype,
      idnumber: req.body.idnumber,
      workstatus: req.body.workstatus,
      location: req.body.location,
      gender: req.body.gender,
      dob: req.body.dob,
      education: req.body.education,
      certifications: req.body.certifications,
      skills: req.body.skills,
      achievements: req.body.achievements,
      github: req.body.github,
      terms: termsAccepted, // This now correctly sets true or false
    });

    // Save the user to the database
    await User.deleteMany({});
    await newUser.save();
    res.redirect("http://localhost:8080/afterlogin");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error registering user: " + error.message);
  }
});

// app.get("/learning", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "learning.html"));
// });

// Route for rendering job listings with sector filter
app.get("/", async (req, res) => {
  const sector = req.query.sector || "IT"; // Default to IT if no sector is selected
  console.log(await JobListing.find({}));
  try {
    const jobs = await JobListing.find({ sector: sector });
    // console.log("Jobs found:", jobs); // Add this to see what jobs are being found
    res.render("jobs.ejs", { jobs });
  } catch (err) {
    console.log("Error fetching jobs:", err);
  }
});

//employer-portak
app.get("/employer", (req, res) => {
  res.render("employer.ejs");
});

// Endpoint to post a new job listing
app.post("/employer", async (req, res) => {
  const { company, title, sector, location, experience, salary, description } =
    req.body;

  try {
    const newJob = new JobListing({
      company,
      title,
      sector,
      location,
      experience,
      salary,
      description,
    });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error posting job listing", error });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
