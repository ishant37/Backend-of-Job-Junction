document.addEventListener("DOMContentLoaded", function () {
  // Data for the "Your Top 5 Skills" chart
  const skillsCtx = document.getElementById("skillsChart").getContext("2d");
  const skillsChart = new Chart(skillsCtx, {
    type: "bar", // Bar chart
    data: {
      labels: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"], // Skills names
      datasets: [
        {
          label: "Skill Level (%)",
          data: [90, 85, 80, 75, 70], // Skill levels in percentage
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100, // Setting maximum to 100% for percentage
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Data for the "User's Tech Analysis" chart
  const techAnalysisCtx = document
    .getElementById("techAnalysisChart")
    .getContext("2d");
  const techAnalysisChart = new Chart(techAnalysisCtx, {
    type: "pie", // Pie chart
    data: {
      labels: [
        "Front-End",
        "Back-End",
        "Databases",
        "Version Control",
        "Testing",
      ], // Analysis categories
      datasets: [
        {
          data: [45, 25, 15, 10, 5], // Percentage distribution for tech categories
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom", // Placing legend at the bottom of the chart
        },
      },
    },
  });

  // Data for the "Tasks Performance" chart
  const ctx2 = document
    .getElementById("tasksPerformanceChart")
    .getContext("2d");
  const tasksPerformanceChart = new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels: ["Assigned", "Completed", "Active"],
      datasets: [
        {
          data: [100, 75, 60],
          backgroundColor: ["#007bff", "#28a745", "#17a2b8"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
