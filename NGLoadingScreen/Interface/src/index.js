window.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("Song");
  const onButton = document.getElementById("On");
  const offButton = document.getElementById("Off");
  const loadingContainer = document.querySelector(".Loading-Container");

  videoElement.volume = 0.2;

  videoElement.muted = false;

  onButton.addEventListener("click", () => {
    videoElement.muted = false;
    onButton.classList.add("Select");
    offButton.classList.remove("Select");
  });

  offButton.addEventListener("click", () => {
    videoElement.muted = true;
    offButton.classList.add("Select");
    onButton.classList.remove("Select");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "F1") {
      event.preventDefault();
      loadingContainer.classList.toggle("Hidden");
    }
  });
});
