function showSection(sectionId) {
    // First, hide all sections
    const allSections = document.querySelectorAll('.hidden');
    allSections.forEach(section => {
      section.style.display = 'none';
    });

    // Now, display the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';

      // Scroll the selected section into view
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    // When the page loads, if there's a hash in the URL, show the section
    const sectionId = window.location.hash.substring(1); // Get the part after #
    if (sectionId) {
      showSection(sectionId); 
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
          showSection(sectionId);
      // Optionally, update the URL hash to reflect the section
      window.history.pushState(null, null, `#${sectionId}`);
    });
  });

//script for scroll pop-up menus
window.addEventListener('scroll', function() {
    var scrollHeight = 300;  // Set the height at which the buttons appear
    var buttonIds = ['fixedScroll1', 'fixedScroll2', 'fixedScroll3', 'fixedScroll4', 'fixedScroll5']; // Array of button IDs
  
    buttonIds.forEach(function(id) {
      var button = document.getElementById(id);
  
      if (button) { // Check if the button exists
        if (window.scrollY >= scrollHeight) {
          button.style.display = 'block';
          button.style.position = 'fixed';
          button.style.top = '120px';
          button.style.backgroundColor = '#ffffff'; // Add background color
        } else {
          button.style.display = 'none';
          button.style.position = '';    // Reset position when the button is hidden
          button.style.width = '';       // Reset width when the button is hidden
        }
      }
    });
  });
  
