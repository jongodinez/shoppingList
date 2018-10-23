//Select elements that we're interested in. Cache them in variables.
var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}


//Creates the list element, creates a delete button and appends it to list element, 
//defines the click function to the delete button and when it encounters a click it removes the list item.
function createListElement() {
    var li = document.createElement("li");
    var delButton = document.createElement('button');
    li.appendChild(document.createTextNode(input.value + "  "));
    ul.appendChild(li);
    input.value = "";
    li.appendChild(delButton)
    delButton.innerHTML = "Remove";
    delButton.addEventListener("click", function(event) {
        this.parentNode.parentNode.removeChild(this.parentNode);
    })
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

button.addEventListener("click", addListAfterClick);

//If anyone ever presses this key run this function.

input.addEventListener("keypress", addListAfterKeyPress);
