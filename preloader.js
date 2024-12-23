
document.body.classList.add('js-enabled');

// Hide the preloader once the page is fully loaded
window.addEventListener('load', function() {
    var preloader = document.querySelector('.full-page-loader');
    preloader.style.display = 'none';
});

