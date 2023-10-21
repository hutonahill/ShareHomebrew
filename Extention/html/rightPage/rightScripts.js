import String from "./readScripts"



//Define the closePopup function
function closePopup() {
  console.log("Closing Pop Up.")
  // Close the popup when the "Close" button is clicked
  window.close();
}

// Function to execute the readScript.js in the specified tab
function readTest(activeTabId) {

  let readScriptsLocation = "readScripts.js"

  chrome.scripting.executeScript({
    target:{tabId:parseInt(activeTabId)},
    files: [readScriptsLocation]
  }, function () {
    console.log(readScriptsLocation, ' executed in tab:', activeTabId);
  });
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeButton');
  var readTestButton = document.getElementById("readButton");

  // Get the tabId from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get('tabId');

  // Use tabId as needed
  console.log('Tab ID:', tabId);

  // Display tabId in the output div
  var tabIdOutput = document.getElementById('tabIdOutput');
  if (tabIdOutput) {
    tabIdOutput.textContent = tabId;
  }

  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  }
  if (readTestButton) {
    readTestButton.addEventListener('click', function () {
      readTest(tabId);
    });
  }
});




