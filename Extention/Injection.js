// Function to check if an element with a specific ID exists
function elementExists(id) {
  return document.getElementById(id) !== null;
}

// Create the "Read" button if it doesn't exist
if (!elementExists('readButton')) {
  const readButton = document.createElement('button');
  readButton.id = 'readButton';
  readButton.textContent = 'Read';
  readButton.style.backgroundColor = 'red';
  readButton.style.marginLeft = '10px'; // Adjust the margin as needed

  // Create the "Write" button if it doesn't exist
  if (!elementExists('writeButton')) {
    const writeButton = document.createElement('button');
    writeButton.id = 'writeButton';
    writeButton.textContent = 'Write';
    writeButton.style.backgroundColor = 'red';
    writeButton.style.marginLeft = '10px'; // Adjust the margin as needed

    // Find the element with the class "page-title"
    const pageTitleElement = document.querySelector('.page-title');

    // Check if the element exists before appending the buttons
    if (pageTitleElement) {
      // Append the buttons to the right of the "page-title" element
      pageTitleElement.appendChild(readButton);
      pageTitleElement.appendChild(writeButton);
    } else {
      console.error('Element with class "page-title" not found.');
    }
  } else {
    console.error('Element with id "writeButton" already exists.');
  }
} else {
  console.error('Element with id "readButton" already exists.');
}


