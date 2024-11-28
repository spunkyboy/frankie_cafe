 // Get modal elements
const modal = document.getElementById("myModal_2");
const modalContent = document.getElementById("modal-content_2");
const closeModalButton = document.getElementsByClassName("close_2")[0];

// Close modal when clicking on <span> (x)
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function pricesLoader(section) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'productsinfo.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // Create a temporary div to hold the loaded HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;
            
            // Find the desired section in the loaded content
            let sectionContent = '';
            const sections = tempDiv.getElementsByTagName('section'); // Use section instead of children

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
                    sectionContent = sections[i].outerHTML; // Get the outer HTML of the matching section
                    break;
                }
            }

            // Display the section content
            document.getElementById('contentChange').innerHTML = sectionContent || 'Content not found.';
            // Show the modal
            document.getElementById('myModal_2').style.display = 'block';
        } else {
            document.getElementById('content_2').innerText = 'Error loading content.';
        }
    };
    xhr.send();
}



