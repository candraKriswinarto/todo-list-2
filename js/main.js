// Get the element
const button = document.getElementById('btn');
const input = document.getElementById('input');
const list = document.querySelector('.list');


const addToDo = (text, done, trash) => {

    items = `
        <li class="items-todo">
            <i class="fa fa-circle-thin co" job="complete"></i>
            <p>${text}</p>
            <i class="fa fa-trash del" job="remove"></i>
        </li>
    `;
    list.insertAdjacentHTML('afterbegin', items);
}

// user click enter key
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        const text = input.value;
        if(text) {
            addToDo(text);
        }
        input.value = "";
    }
});

// completed function
const completeToDo = (element) => {
    const parent = element.parentNode;
    parent.classList.add("completed");
    console.log(parent);
}

// Remove function
const removeToDo = (element) => {
    console.log('WAWAWAWAWAWW');
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