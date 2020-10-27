function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;  
    // return the new element
    return newElement;
}