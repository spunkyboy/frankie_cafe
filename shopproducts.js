
window.onload = function() {
    // Get the stored target box ID from localStorage
    const targetId = localStorage.getItem('targetBox');

    if (targetId) {
        // Show the corresponding box if targetId is stored
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.style.display = 'block';
        }
    }
};
