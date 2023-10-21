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
      console.log("Starting Read ", this.type)
      console.log("\tid: ", this.id)
      let element = document.getElementById(this.id);


      if (element) {
        console.log("\telement.value: ", element.value);
        console.log("\telement: ", element)

          this.value = element.value;
      } else {
          console.error(`\tElement with id '${this.id}' not found.`);
      }
      console.log("Ending Read ", this.type);
  }

  writeValue(){
    console.log("Starting Write ", this.type)
    console.log("\tid: ", this.id);
    let element = document.getElementById(this.id);

    if(element){
      console.log("\telement.value: ", element.value);
      console.log("\telement: ", element)

      element.value = this.value;

      console.log("\telement.value: ", element.value);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }
    console.log("Ending Write ", this.type);
  }
}

class IntElement{
  constructor(idInput, nameInput) {
    /**
     * The value associated with the HTML element.
     * @type {string}
     */
    this.value = "";

    this.type = "Int"

    /**
     * The Id the HTML element.
     * @property {Int} value
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
      console.log("Starting Read ", this.type)
      console.log("\tid: ", this.id)
      let element = document.getElementById(this.id);


      if (element) {
        console.log("\telement.value: ", element.value);
        console.log("\telement: ", element)

          this.value = element.value;
      } else {
          console.error(`\tElement with id '${this.id}' not found.`);
      }
      console.log("Ending Read ", this.type);
  }

  writeValue(){
    console.log("Starting Write ", this.type)
    console.log("\tid: ", this.id);
    let element = document.getElementById(this.id);

    if(element){
      console.log("\telement.value: ", element.value);
      console.log("\telement: ", element)

      element.value = this.value;

      console.log("\telement.value: ", element.value);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }
    console.log("Ending Write ", this.type);
  }
}

class BooleanElement{
  constructor(idInput, nameInput) {
    /**
     * The value associated with the HTML element.
     * @type {string}
     */
    this.value = false;

    this.type = "Boolian"

    this.FalseValue = "fc-fake-item"
    this.TrueValue = "fc-fake-item fc-selected"

    // idealy i would pass these strings in using this.<bool>Value. 
    // but that doesent work...
    this.Translation = {
      "fc-fake-item":false,
      "fc-fake-item fc-selected":true,
      false:"fc-fake-item",
      true:"fc-fake-item fc-selected"
    }

    /**
     * The Id the HTML element.
     * @property {Int} value
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
      console.log("Starting Read ", this.type)
      console.log("\tid: ", this.id)
      let element = document.getElementById(this.id);


      if (element) {
        console.log("\telement.className: ", element.className);
        console.log("\telement: ", element)

        console.log("\tValue: ")
          this.value = this.Translation

      } else {
          console.error(`\tElement with id '${this.id}' not found.`);
      }

      console.log("Ending Read ", this.type);
  }

  writeValue(){
    console.log("Starting Write ", this.type)
    console.log("\tid: ", this.id);

    // get the target element
    let element = document.getElementById(this.id);

    // if the element exist, continue.
    if(element){

      console.log("\telement.className: ", element.className);
      console.log("\telement: ", element)

      // use the translation dict above to get the string version of the bool.
      let newClassString = this.Translation[this.value];
    
      
      element.classList = [];
      element.classList.add(...newClassString.split(' '));

      console.log("\telement.className: ", element.className);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }
    console.log("Ending Write ", this.type);
  }
}


class OptionElement{
  constructor(idInput, nameInput) {
    /**
     * in this element we are storing the id of the sected element
     * @type {string}
     */
    this.value = false;

    this.type = "Option"

    /**
     * The Id the HTML element.
     * @property {Int} value
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
      console.log("Starting Read ", this.type)
      console.log("\tid: ", this.id)
      let element = document.getElementById(this.id);


      if (element) {
        console.log("\telement.className: ", element.className);
        console.log("\telement: ", element)

        let selectedElement = element.options[element.selectedIndex];

        console.log("\tselectedElement: ", selectedElement);
        if(selectedElement){
            this.value = selectedElement.id;
        }
        else{
          console.error("\tSelect Element has no selected Element.");
        }

      } else {
          console.error(`\tElement with id '${this.id}' not found.`);
      }

      console.log("Ending Read ", this.type);
  }

  writeValue(){
    console.log("Starting Write ", this.type)
    console.log("\tid: ", this.id);

    // get the target element
    let element = document.getElementById(this.id);

    // if the element exist, continue.
    if(element){

      console.log("\telement.className: ", element.className);
      console.log("\telement: ", element)

      for (let i = 0; i <element.options.lenght; i++){
        const option = element.options[i];
        
        if (option.id == this.value){
          option.selected = true;

          const event = new Event('change');
          element.dispatchEvent(event);
        }
      }
      

      console.log("\telement.className: ", element.className);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }
    console.log("Ending Write ", this.type);
  }
}

class HTMLElement {
  constructor(idInput, nameInput) {
    /**
     * The innerHTML of the HTML element.
     * @type {string}
     */
    this.value = "";

    /**
     * The type of the HTML element.
     * @type {string}
     */
    this.type = "HTML";

    /**
     * The Id of the HTML element.
     * @type {string}
     */
    this.id = idInput;

    /**
     * The name of the HTML element.
     * @type {string}
     */
    this.name = nameInput;
  }

  /**
   * Retrieves the value from the current HTML page.
   *
   * @method
   * @returns {void}
   */
  readValue() {
    console.log(`Starting Read ${this.type}`);
    console.log(`\tid: ${this.id}`);
    let element = document.getElementById(this.id);

    if (element) {
      console.log(`\telement.innerHTML: ${element.innerHTML}`);
      console.log(`\telement:`, element);

      this.value = element.innerHTML;
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }

    console.log(`Ending Read ${this.type}`);
  }

  /**
   * Writes the value to the HTML element.
   *
   * @method
   * @returns {void}
   */
  writeValue() {
    console.log(`Starting Write ${this.type}`);
    console.log(`\tid: ${this.id}`);

    // get the target element
    let element = document.getElementById(this.id);

    // if the element exists, continue.
    if (element) {
      console.log(`\telement.innerHTML: ${element.innerHTML}`);
      console.log(`\telement:`, element);

      element.innerHTML = this.value;

      console.log(`\telement.innerHTML: ${element.innerHTML}`);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }

    console.log(`Ending Write ${this.type}`);
  }
}

class MultipleOptionsElement {
  constructor(idInput, nameInput) {
    /**
     * The innerHTML of the Multiple Options element.
     * @type {string}
     */
    this.value = "";

    /**
     * The type of the Multiple Options element.
     * @type {string}
     */
    this.type = "Multiple Options";

    /**
     * The Id of the Multiple Options element.
     * @type {string}
     */
    this.id = idInput;

    /**
     * The name of the Multiple Options element.
     * @type {string}
     */
    this.name = nameInput;
  }

  /**
   * Retrieves the value from the current HTML page.
   *
   * @method
   * @returns {void}
   */
  readValue() {
    console.log(`Starting Read ${this.type}`);
    console.log(`\tid: ${this.id}`);
    let element = document.getElementById(this.id);

    if (element) {
      console.log(`\telement.innerHTML: ${element.innerHTML}`);
      console.log(`\telement:`, element);

      this.value = element.innerHTML;
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }

    console.log(`Ending Read ${this.type}`);
  }

  /**
   * Writes the value to the HTML element.
   *
   * @method
   * @returns {void}
   */
  writeValue() {
    console.log(`Starting Write ${this.type}`);
    console.log(`\tid: ${this.id}`);

    // get the target element
    let element = document.getElementById(this.id);

    // if the element exists, continue.
    if (element) {
      console.log(`\telement.innerHTML: ${element.innerHTML}`);
      console.log(`\telement:`, element);

      element.innerHTML = this.value;

      console.log(`\telement.innerHTML: ${element.innerHTML}`);
    } else {
      console.error(`\tElement with id '${this.id}' not found.`);
    }

    console.log(`Ending Write ${this.type}`);
  }
}





let AssignmentDict = {
  "Multiple Options":MultipleOptionsElement,
  "HTML":HTMLElement,
  "Int":IntElement,
  "Boolian":BooleanElement,
  "String":StringElement,
  "Options":MultipleOptionsElement
}










function promptForJsonFilePath(callback) {
  // Create an input element of type file
  const inputElement = document.createElement('input');
  inputElement.type = 'file';

  // Set the accept attribute to allow only JSON files
  inputElement.accept = '.json';

  // Add an event listener for when a file is selected
  inputElement.addEventListener('change', function () {
    // Check if files were selected
    if (inputElement.files.length > 0) {
      // Get the selected file path (assuming the first file in the list)
      const filePath = inputElement.files[0].path;

      // Call the callback function with the selected file path
      callback(filePath);
    }
  });

  // Trigger a click event on the input element to open the file dialog
  inputElement.click();
}


// Function to handle the "Read" button click
function handleReadButtonClick() {
  
  promptForJsonFilePath(function (filePath) {
    console.log('Selected JSON file path:', filePath);
  });

}

// Function to handle the "Write" button click
function handleWriteButtonClick() {
  
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


