function elementExists(id) {
  return document.getElementById(id) !== null;
}
  class StringElement{
    constructor(idInput, nameInput) {
      /**
       * The value associated with the HTML element.
       * @type {string}
       */
      this.value = "";

      this.type = "String"
  
      /**
       * The Id the HTML element.
       * @property {string} value
       */
      this.id = idInput;
        
      /**
       * The name of the element.
       * @type {string}
       */
      this.name = nameInput
    }
  
    /**
     * Retrieves the value from the current HTML page.
     *
     * @method
     * @returns {void}
     */
    readValue() {
        console.log("Starting Read Test")
        let element = document.getElementById(this.id);
  
  
        if (element) {
          console.log("element.value: ", element.value);
          console.log("element: ", element)

            this.value = element.value;
        } else {
            console.error(`Element with id '${this.id}' not found.`);
        }
    }
  
    writeValue(){
      console.log("Starting Write Test")
      console.log("id: ", this.id);
      let element = document.getElementById(this.id);
  
      if(element){
        console.log("element.value: ", element.value);
        console.log("element: ", element)
  
        element.value = this.value;
  
        console.log("element.value: ", element.value);
      } else {
        console.error(`Element with id '${this.id}' not found.`);
    }
    }
  }



// Function to check if an element with a specific ID exists
function elementExists(id) {
  return document.getElementById(id) !== null;
}

// Function to handle the "Read" button click
function handleReadButtonClick() {
  console.log('Read button clicked');
  
  let textString = new StringElement("field-Name", "Monster Name");

  console.log("TextString: ", textString);

  textString.readValue(); 

  console.log(textString.name, ": ", textString.value);

}

// Function to handle the "Write" button click
function handleWriteButtonClick() {
  console.log('Write button clicked');
  
  let textString = new StringElement("field-Name", "Monster Name");

  textString.value = "Not A Monster"

  textString.writeValue();
}

// Create the "Read" button if it doesn't exist
if (!elementExists('readButton')) {
  const readButton = document.createElement('button');
  readButton.id = 'readButton';
  readButton.textContent = 'Read';
  readButton.style.backgroundColor = 'red';
  readButton.style.marginLeft = '10px'; // Adjust the margin as needed

  // Add an event listener for the "Read" button
  readButton.addEventListener('click', handleReadButtonClick);

  // Create the "Write" button if it doesn't exist
  if (!elementExists('writeButton')) {
    const writeButton = document.createElement('button');
    writeButton.id = 'writeButton';
    writeButton.textContent = 'Write';
    writeButton.style.backgroundColor = 'red';
    writeButton.style.marginLeft = '10px'; // Adjust the margin as needed

    // Add an event listener for the "Write" button
    writeButton.addEventListener('click', handleWriteButtonClick);

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
    console.log('Element with id "writeButton" already exists.');
  }
} else {
  console.log('Element with id "readButton" already exists.');
}


