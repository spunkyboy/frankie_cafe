
window.onload = function() {
      // Get the preloader element
      const preloader = document.getElementById('preloaderProducts');
    
      // Set a delay (in milliseconds) before hiding the preloader
      setTimeout(function() {
          if (preloader) {
              preloader.style.display = 'none';
          }
      }, 3000); // 1000ms = 1 second delay
  
    // Get the stored target box ID from localStorage
    const targetId = localStorage.getItem('targetBox');

    if (targetId) {
        // Show the corresponding box if targetId is stored
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.style.display = 'block';
        } else {
            console.warn(`Element with ID "${targetId}" not found.`);
        }
    }else {
        console.log('No target box ID found in localStorage.');
    }

};
