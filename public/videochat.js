document.addEventListener("DOMContentLoaded", () => {
  const startChatButton = document.getElementById("start-chat");
  const userVideo = document.getElementById("user-video");

  // Start Video Chat functionality
  startChatButton.addEventListener("click", function () {
    // Access the user's webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          // Set the video stream as the source of the video element
          userVideo.srcObject = stream;
        })
        .catch(function (error) {
          console.error("Error accessing the webcam: ", error);
          alert(
            "Unable to access your camera. Please check permissions or try another browser."
          );
        });
    } else {
      alert(
        "Your browser does not support webcam access. Please update or try a modern browser."
      );
    }
  });
});
