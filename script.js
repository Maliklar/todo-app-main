// DOM Elements
const moodToggle = document.getElementById("toggle-mood");
const body = document.body;
const todoInput = document.getElementById('todo-input');
const cardBody = document.getElementById('card-body');
const itemsNumber = document.getElementById('number-of-items');
let mood = true;


// Toggle night / day mood
moodToggle.addEventListener("click", () => {
    if (mood) {
        mood = false;
        moodToggle.setAttribute("src", "./images/icon-sun.svg");
        body.style.backgroundColor = "var(--VeryDarkBlue)";
        body.style.backgroundImage = "url('/images/bg-desktop-dark.jpg')";
    } else {
        mood = true;
        moodToggle.setAttribute("src", "./images/icon-moon.svg");
        body.style.backgroundColor = "var(--VeryLightGray)";
        body.style.backgroundImage = "url('/images/bg-desktop-light.jpg')";
    }
});

// Array That will hold the values of todos
let todos = [];



function checkItem(ele) {
    const task = ele.parentNode;
    if (task.dataset.value === 'true') {
        task.dataset.value = 'false';
    } else {
        task.dataset.value = 'true';
    }
    for (let i = 0; i < todos.length; i++) {
        if (task.id == todos[i].id) {
            todos[i].state = (task.dataset.value === 'true');
        }
    }
}

function addItem(value) {
    const id = new Date().getTime();
    let item = {
        title: value,
        state: todoInput.parentNode.dataset.value === 'true',
        id: id
    };



    // Create Item
    const component = document.createElement('div');
    component.setAttribute('class', 'task');
    component.setAttribute('data-value', todoInput.parentNode.dataset.value);
    component.setAttribute('id', id);
    component.innerHTML = `
                    <div class="checkbox" onclick="checkItem(this)">
                        <img src="./images/icon-check.svg" alt="Check Icon" class="check-img">
                    </div>
                    <p class="task-title">${value}</p>
                    <div style=" display: flex; justify-content: center; align-items: center;">
                        <img src="./images/icon-cross.svg" alt="Close Icon" class="task-option" onclick="deleteItem(this)">
                    </div>
    `;
    cardBody.prepend(component);
    todos.push(item);
    updateItemsNumber();

}

todoInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addItem(todoInput.value);
    }

});

function deleteItem(ele) {
    console.log(ele.parentNode.parentNode);
    let parent = ele.parentNode.parentNode;
    cardBody.removeChild(parent);

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == ele.parentNode.parentNode.id) {
            todos.splice(i);
            break;
        }
    }
    updateItemsNumber();
}

function clearCompleted() {
    let a = todos.filter((val, index) => {
        // console.log(val);
        if (val.state == true) {
            cardBody.removeChild(document.getElementById(val.id))
        } else {
            return val;
        }
    })
    todos = a;
    updateItemsNumber();
}

function updateItemsNumber() {
    itemsNumber.innerText = todos.length;
}

function getActive() {
    todos.filter((val) => {
        if (val.state == true) {
            document.getElementById(val.id).style.display = "none";
        } else {
            document.getElementById(val.id).style.display = "grid";
        }
    })
}

function getAll() {
    todos.filter((val) => {
        document.getElementById(val.id).style.display = "grid";
    });
}

function getCompleted() {
    todos.filter((val) => {
        if (val.state == false) {
            document.getElementById(val.id).style.display = "none";
        } else {
            document.getElementById(val.id).style.display = "grid";
        }
    })
}




/**
 * Filling the todos with initial data for screenshot only
 * 
 *          REMOVE IT 
 */

function fillTodosTest() {
    todos = [{
        title: "Complete online JavaScript course",
        state: false,
        id: 1
    }, {
        title: "Jog around the park 3x",
        state: false,
        id: 2
    }, {
        title: "10 minutes meditation",
        state: false,
        id: 3
    }, {
        title: "Read for 1 hour",
        state: false,
        id: 4
    }, {
        title: "Pick up groceries",
        state: false,
        id: 5
    }, {
        title: "Complete Todo App on Frontend Mentor",
        state: false,
        id: 6
    }];

    todos.forEach(element => {
        const component = document.createElement('div');
        component.setAttribute('class', 'task');
        component.setAttribute('data-value', element.title);
        component.setAttribute('id', element.id);
        component.innerHTML = `
                    <div class="checkbox" onclick="checkItem(this)">
                        <img src="./images/icon-check.svg" alt="Check Icon" class="check-img">
                    </div>
                    <p class="task-title">${element.title}</p>
                    <div style=" display: flex; justify-content: center; align-items: center;">
                        <img src="./images/icon-cross.svg" alt="Close Icon" class="task-option" onclick="deleteItem(this)">
                    </div>
    `;
        cardBody.prepend(component);
    })

    updateItemsNumber();

}

fillTodosTest();