/**
 * Represents an HTML element with associated value and identifiers.
 *
 * @class
 * @classdesc
 * The `Element` class is designed to encapsulate an HTML element's information,
 * including its value and identifiers.
 *
 * @param {string} valueInput - The value associated with the HTML element.
 * @param {Object} idInput - An object containing identifiers for the HTML element.
 *                           The keys are identifier names (e.g., CSS tag names),
 *                           and the values are the corresponding identifier values.
 */
class Element {
    value
    name
    id
    
    
    constructor(idInput, nameInput) {
      /**
       * The value associated with the HTML element.
       * @type {string}
       */
      this.value = "";
  
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
      // Implementation logic to read the value from the HTML page
    }
  
    /**
     * Writes the value to the current HTML page.
     *
     * @method
     * @returns {void}
     */
    writeValue() {
      // Implementation logic to write the value to the HTML page
    }
  
    /**
     * Converts the data in the class to a JSON string and returns it.
     *
     * @method
     * @returns {string} - JSON representation of the class data.
     */
    toJson() {
      // Implementation logic to convert the class data to a JSON string
      return JSON.stringify({
        value: this.value,
        id: this.id,
      });
    }
  }
  
  /**
   * Represents a specialized Element for handling string values.
   *
   * @class
   * @extends Element
   */
  class StringElement extends Element {
  
    /**
     * Retrieves the value from the current HTML page.
     *
     * @method
     * @returns {void}
     */
    readValue() {
        // Assuming this.id contains the id of the element you want to retrieve
  
        if (docObject){
          let element = document.getElementById(this.id);
  
          if (element) {
              this.value = element.innerHTML;
          } else {
              let element2 = document.getElementById("output")
              element2.innerHTML = (`Element with id '${this.id}' not found.`);
          }
        }
  
        
    }
  }

console.log("Starting Test")

let testString = new StringElement("field-Name", "Monster Name")

testString.readValue()

let output = testString.value

console.log("Results!: ", output)