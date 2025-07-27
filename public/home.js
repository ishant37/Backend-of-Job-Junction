// const main = document.querySelector(a);
// main.style.opacity = 0;
// setTimeout(() => {
//   main.innerHTML = newContent;
//   main.style.opacity = 1;

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carouselItems = document.getElementById("carousel-items");

prev.addEventListener("click", () => {
  carouselItems.scrollBy({
    left: -220,
    behavior: "smooth",
  });
});

next.addEventListener("click", () => {
  carouselItems.scrollBy({
    left: 220,
    behavior: "smooth",
  });
});
document.getElementById("jobIcon").addEventListener("click", function () {
  window.location.href = "http://localhost:8080";
});
document.getElementById("communityIcon").addEventListener("click", function () {
  window.location.href = "community2.html";
});
document.getElementById("formIcon").addEventListener("click", function () {
  window.location.href = "form.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Find Your Jobs and Internships"; // The text to type
  const typewriterText = document.getElementById("typewriter-text");
  let index = 0;
  let typingSpeed = 100; // Typing speed in milliseconds

  function typeWriter() {
    if (index < text.length) {
      typewriterText.innerHTML += text.charAt(index); // Append characters
      index++;
      setTimeout(typeWriter, typingSpeed); // Delay for next character
    } else {
      setTimeout(resetTypewriter, 1000); // Wait for 1 second before resetting
    }
  }

  function resetTypewriter() {
    index = 0;
    typewriterText.innerHTML = ""; // Clear the text
    typeWriter(); // Start typing again
  }

  typeWriter(); // Initial call to start typing
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function checkScroll() {
    const triggerRight = window.innerWidth * 0.85; // Trigger point for horizontal scroll

    sections.forEach((section) => {
      const sectionLeft = section.getBoundingClientRect().left;

      // Add or remove animation class based on horizontal scroll position
      if (sectionLeft < triggerRight) {
        section.classList.add("animate"); // Animate when section comes into view
      } else {
        section.classList.remove("animate"); // Deanimate when scrolling out of view
      }
    });
  }

  window.addEventListener("scroll", checkScroll); // Run function on scroll
  checkScroll(); // Initial check in case the page is already scrolled
});
