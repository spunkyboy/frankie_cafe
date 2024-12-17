
  window.addEventListener('load', function() {
    // Hide the preloader and show the main content after the page is fully loaded
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
      // Check if both elements exist before modifying their styles
      if (preloader && content) {
        preloader.style.display = 'none';  // Hide the preloader
        content.style.display = 'block';   // Show the main content
    }
});





