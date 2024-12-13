window.addEventListener('load', function() {
    // Hide the preloader and show the main content after the page is fully loaded
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    preloader.style.display = 'none';
    content.style.display = 'block';
});