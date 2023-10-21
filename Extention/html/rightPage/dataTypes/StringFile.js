

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
    readValue(htmlPage) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlPage, 'text/html');

        // Assuming this.id contains the id of the element you want to retrieve
        const element = doc.getElementById(this.id);

        if (element) {
            this.value = element.innerHTML;
        } else {
            console.error(`Element with id '${this.id}' not found.`);
        }
    }
}


module.exports.StringElement = StringElement;