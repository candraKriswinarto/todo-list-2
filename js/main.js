// Get the element
const button = document.getElementById('btn');
const input = document.getElementById('input');
const list = document.querySelector('.list');

// class
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const lineThrough = "line-through"

const addToDo = (text) => {

    // const DONE = done ? check : uncheck;

    items = `
        <li class="items-todo">
            <i class="fa ${uncheck} co" job="complete"></i>
            <p>${text}</p>
            <i class="fa fa-trash del" job="remove"></i>
        </li>
    `;
    list.insertAdjacentHTML('afterbegin', items);
}

// add items function
const addItems = () => {
    const text = input.value;
        if(text) {
            addToDo(text);
        }
        input.value = "";
}

// user click the add button
button.addEventListener('click', addItems);

// user click enter key
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addItems();
    }
});

// completed function
const completeToDo = (element) => {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('p').classList.toggle(lineThrough);
}

// Remove function
const removeToDo = (element) => {
    const item = element.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
}

// Listen when user click the completed or remove button
list.addEventListener('click', function(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    
    if(elementJob == "complete") {
        completeToDo(element);
    }else if(elementJob == "remove") {
        removeToDo(element);
    }
});