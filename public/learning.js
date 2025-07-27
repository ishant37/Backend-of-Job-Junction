document.addEventListener("DOMContentLoaded", function () {
  const text = "Certification Courses"; // The text to type
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
