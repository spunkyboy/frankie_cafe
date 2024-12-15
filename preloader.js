// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".preload-image");
    const preloader = document.querySelector(".image-preloader");
  
    // Add an event listener for when the image has loaded
    image.onload = function() {
      // Add the 'loaded' class to display the image
      image.classList.add("loaded");
      // Hide the preloader
      preloader.style.display = "none";
    };
  
    // If the image is already cached, manually trigger the load event
    if (image.complete) {
      image.onload(); // Trigger onload if the image is already loaded
    }
  });
  