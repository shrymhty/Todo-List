//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);

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

