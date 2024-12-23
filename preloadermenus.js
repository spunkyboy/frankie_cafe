document.addEventListener("DOMContentLoaded", function () {
    // Get all images with the 'preload-img' class
    const images = document.querySelectorAll('.preload-img');

    // Loop through each image and check if it has loaded
    images.forEach(img => {
      // Handle image loading
      img.onload = function () {
        const preloader = img.previousElementSibling;

        // Ensure the preloader exists before attempting to hide it
        if (preloader) {
          preloader.style.transition = 'opacity 0.5s ease, visibility 0s 0.5s'; // Fade out effect
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden'; // Hide preloader after fade-out
        }
      };

      // If the image is already loaded (cached)
      if (img.complete) {
        img.onload(); // Manually trigger the onload function
      }
    });
  });