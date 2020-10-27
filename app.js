const body = document.querySelector('body');

function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;  
    // return the new element
    return newElement;
}

const card = createNewElement('div', 'My new card:');
card.classList.add('card');

const cardText = createNewElement('p', 'Here is my description.');
card.classList.add('card-title');
card.appendChild(cardText);

const link = createNewElement('a', 'General Assembly');
link.classList.add('btn', 'btn-primary')
link.setAttribute('href', 'https://generalassemb.ly');
card.appendChild(link);

body.appendChild(card);