//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', fitlerTodo);


//Functions
function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //buttons (complete and deleted)
    const completedbtn = document.createElement('button');
    completedbtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedbtn.classList.add('complete-btn');
    todoDiv.appendChild(completedbtn);

    //LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //trash button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input
    todoInput.value = '';
};

function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] == 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
};

function fitlerTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (event.target.value) {
            case "all" : 
                todo.style.display = "flex";
                break;
            case "complete": 
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex"; 
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }  else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

