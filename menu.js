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


// // Get modal elements
// const modal = document.getElementById("myModal");
// const modalContent = document.getElementById("modal-content");
// const closeModalBtn = document.getElementsByClassName("close")[0];

// // Function to load content from 'modalpages.html'
// function loadContent(section) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'modalpages.html', true);
    
//     xhr.onload = function() {
//         if (this.status === 200) {
//             // Create a temporary div to hold the loaded HTML
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = this.responseText;

//             // Find the desired section in the loaded content
//             let sectionContent = '';
//             const sections = tempDiv.getElementsByTagName('article'); // Use article instead of children

//             for (let i = 0; i < sections.length; i++) {
//                 if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
//                     sectionContent = sections[i].outerHTML; // Get the outer HTML of the matching section
//                     break;
//                 }
//             }

//             // Display the section content
//             document.getElementById('content').innerHTML = sectionContent || 'Content not found.';
            
//             // Insert external script into the article content
//             if (sectionContent) {
//                 const script = document.createElement('script');
//                 script.src = "path/to/external/script.js"; // Replace with the correct path to your external script
//                 script.type = "text/javascript";
//                 document.getElementById('content').appendChild(script);
//             }

//             // Show the modal
//             if (modal) {
//                 modal.style.display = 'block';
//             }
//         } else {
//             document.getElementById('content').innerText = 'Error loading content.';
//         }
//     };
    
//     xhr.onerror = function() {
//         // Handle error case for XHR failure
//         document.getElementById('content').innerText = 'Network error. Please try again later.';
//     };

//     xhr.send();
// }

// // Close modal when clicking on <span> (x)
// if (closeModalBtn) {
//     closeModalBtn.addEventListener('click', function() {
//         if (modal) {
//             modal.style.display = "none";
//         }
//     });
// }

// // Close modal when clicking outside of the modal content
// window.addEventListener('click', function(event) {
//     if (modal && event.target === modal) {
//         modal.style.display = "none";
//     }
// });
