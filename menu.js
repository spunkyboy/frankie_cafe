 // Get modal elements
 const modal = document.getElementById("myModal");
 const modalContent = document.getElementById("modal-content");
 const closeModalBtn = document.getElementsByClassName("close")[0];


function loadContent(section) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'modalpages.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // Create a temporary div to hold the loaded HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;
            
            // Find the desired section in the loaded content
            let sectionContent = '';
            const sections = tempDiv.getElementsByTagName('article'); // Use article instead of children

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
                    sectionContent = sections[i].outerHTML; // Get the outer HTML of the matching section
                    break;
                }
            }

            // Display the section content
            document.getElementById('content').innerHTML = sectionContent || 'Content not found.';
            // Show the modal
            document.getElementById('myModal').style.display = 'block';
        } else {
            document.getElementById('content').innerText = 'Error loading content.';
        }
    };
    xhr.send();
}

// Close modal when clicking on <span> (x)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}