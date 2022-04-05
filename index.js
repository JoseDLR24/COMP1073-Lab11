// I created the 3 variables to reference the list, input, and button
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// this is the function that is going to run everytime the 'Add item' button is clicked
button.addEventListener('click', () => {
    // Here is saved the item as a string in the variable 'item'
    var item = input.value;
    input.value = '';

    // here I created the 3 new elements that are going to be inside the list of items
    var listItem = document.createElement('li');
    var listText = document.createElement('span');
    var listBt = document.createElement('button');

    // append the span and button elements to the list, and then, set the text
    listItem.appendChild(listText);
    listItem.appendChild(listBt);
    listText.textContent = item;
    listBt.textContent = 'Delete';

    // append the 'listItem' inside the list
    list.appendChild(listItem);

    // added an eventListener to the delete button that will remove that item
    listBt.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});