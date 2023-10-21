// Define the closePopup function
function closePopup() {

  console.log("Closeing Window")
  // Close the popup when the "Close" button is clicked
  window.close();
}

// Define the openBeyondLink function
function openBeyondLink() {
  console.log("Redirecting...")

  // Open the specified link at the bottom
  chrome.tabs.create({ url: 'https://www.dndbeyond.com/homebrew' });
  // Close the popup
  closePopup();
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeButton');
  var toBeyondButton = document.getElementById("toBeyondButton");

  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  }
  if (toBeyondButton) {
    toBeyondButton.addEventListener('click', openBeyondLink);
  }
});