// Define the closePopup function
function closePopup() {
    // Close the popup when the "Close" button is clicked
    window.close();
  }

  
  
  // Add an event listener to the button
  document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.getElementById('closeButton');
  
    if (closeButton) {
      closeButton.addEventListener('click', closePopup);
    }
  });