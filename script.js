//Select elements that we're interested in. Cache them in variables.
var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var delButton = document.createElement('button');
    li.appendChild(document.createTextNode(input.value + "  "));
    ul.appendChild(li);
    li.appendChild(delButton)
    delButton.innerHTML = "Remove";
    input.value = "";
}

//If the length of the input in the box is greater than 0, create a text node in li.
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

//If the length of the input in the box is greater than 0, create a text node in li.
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Add an event listener for "click", if anyone clicks run this function.

button.addEventListener("click", addListAfterClick, delListItem);

//If anyone ever presses this key run this function.

input.addEventListener("keypress", addListAfterKeyPress);

//1. If you click on the list item, it toggles the .done  class on and off.

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

function delListItem() {
    li.toggle("done");
    
}

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 