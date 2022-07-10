// Toggle night day mood
const moodToggle = document.getElementById("toggle-mood");
const body = document.body;
const todoInput = document.getElementById('todo-input');
const cardBody = document.getElementById('card-body');
let mood = true;

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

// TODOS

let todos = [];

function checkItem(ele) {
    const task = ele.parentNode;
    if (task.dataset.value === 'true') {
        task.dataset.value = 'false';
    } else {
        task.dataset.value = 'true';
    }
}

function addItem(value) {
    let item = {
        title: value,
        state: true, // true = checked , false = unchecked
    };

    // Create Item
    const component = document.createElement('div');
    component.setAttribute('class', 'task');
    component.setAttribute('data-value', 'false');
    component.innerHTML = `
                    <div class="checkbox" onclick="checkItem(this)">
                        <img src="./images/icon-check.svg" alt="Check Icon" class="check-img">
                    </div>
                    <p class="task-title">${value}</p>
                    <div style=" display: flex; justify-content: center; align-items: center;">
                        <img src="./images/icon-cross.svg" alt="Close Icon" class="task-option">
                    </div>
    `;
    cardBody.prepend(component);
    todos.push(item);
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
}