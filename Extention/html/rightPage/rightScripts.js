
import {StringElement} from "./dataTypes/StringFile";

// Define the closePopup function
function closePopup() {
  // Close the popup when the "Close" button is clicked
  window.close();
}

function readTest() {

  console.log("Running Read Test")
  testString = new StringElement("MonsterName", "field-Name")

  testString.readValue()

  console.log(testString.name, ": ", testString.value)
}




  
// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function () {
  var closeButton = document.getElementById('closeButton');
  var readTestButton = document.getElementById("readButton");

  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  }
  if(readTestButton){
    readTestButton.addEventListener('click', readTest)
  }
});