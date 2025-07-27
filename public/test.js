// Correct Answers
const answers = {
  q1: "A",
  q2: "A",
  q3: "A",
  q4: "A",
  q5: "C",
  q6: "C",
  q7: "A",
  q8: "B",
  q9: "C",
  q10: "B",
  // Add the rest of the answers here
};
// Submit Quiz Function
function submitQuiz() {
  let score = 0;
  const form = document.forms["quizForm"];

  for (let question in answers) {
    const userAnswer = form[question].value;
    if (userAnswer === answers[question]) {
      score++;
    }
  }

  document.getElementById("score").innerText = score;
  document.getElementById("result").style.display = "block";
  document.getElementById("quizForm").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("feedbackForm").style.display = "block";
}

// Timer Logic
let totalTime = 600; // 10 minutes in seconds
let timer = setInterval(function () {
  totalTime--;
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  document.getElementById("timer").innerText = `Time Left: ${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  if (totalTime <= 0) {
    clearInterval(timer);
    submitQuiz();
  }
}, 1000);

// Alert when tab changes
document.addEventListener("visibilitychange", function () {
  // Check if the feedback form is visible
  if (document.getElementById("feedbackForm").style.display === "block") {
    return; // Do nothing if the feedback form is visible
  }
  if (document.getElementById("feedbackForm").style.display === "none") {
    return; // Do nothing if the feedback form is visible
  }

  if (document.hidden) {
    alert("You changed the tab! The quiz will restart.");
    location.reload(); // Restarts the quiz
  }
});

// Feedback Form Submission
function submitFeedback() {
  const rating = document.getElementById("feedbackRating").value;

  if (rating) {
    alert(`Thank you for your feedback! You rated us ${rating} stars.`);
    // Here, you can send data to the server and save it to an Excel sheet

    // Reset form after submission
    document.getElementById("feedbackForm").style.display = "none";

    // Add the Home button after feedback submission
    const homeButton = document.createElement("button");
    homeButton.innerText = "Go Home";
    homeButton.className = "btn btn-primary mt-4";
    homeButton.onclick = function () {
      window.location.href = "home2.html"; // Replace with your home page URL
    };

    // Append the button to the container
    document.querySelector(".container").appendChild(homeButton);
  } else {
    alert("Please give your feedback.");
  }
}
