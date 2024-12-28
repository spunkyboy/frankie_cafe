
// // Get modal elements
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const preloader = document.getElementById("preloader2"); // Preloader element

// // Function to load content into the modal
function loadContent(section) {
    // Show preloader while content is loading
    preloader.style.visibility = "visible"; // Make sure it's visible
    preloader.style.opacity = 1; // Fade in the preloader
    console.log('Preloader visible, loading content...');

    // Optionally, you can use a setTimeout to simulate a delay (e.g., 3 seconds)
    setTimeout(function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'modalpages.html', true);
        xhr.onload = function() {
            if (this.status === 200) {
                console.log('Content loaded successfully.');
                // Create a temporary div to hold the loaded HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = this.responseText;
                
                // Find the desired section in the loaded content
                let sectionContent = '';
                const sections = tempDiv.getElementsByTagName('article');

                // Loop through sections and find the matching section by name or content
                for (let i = 0; i < sections.length; i++) {
                    if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
                        sectionContent = sections[i].outerHTML;
                        break;
                    }
                }

                // Display the section content in the modal
                document.getElementById('content').innerHTML = sectionContent || 'Content not found.';
                
                // Hide preloader and show the modal
                preloader.style.visibility = "hidden"; // Hide preloader
                preloader.style.opacity = 0; // Fade out the preloader
                modal.style.display = 'block'; // Show the modal
                console.log('Preloader hidden, modal content shown.');
            } else {
                console.log('Error loading content.');
                // If content loading fails
                document.getElementById('content').innerText = 'Error loading content.';
                preloader.style.visibility = "hidden"; // Hide preloader in case of error
                preloader.style.opacity = 0; // Fade out the preloader
            }
        };
        xhr.send();
    }, 1000); // Delay for 3 seconds before showing content
}

// Close modal when clicking on the close button (x)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


