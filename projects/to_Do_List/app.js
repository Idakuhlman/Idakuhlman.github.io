const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
    event.preventDefault()

    // Todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    // Trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    // append to list

    todoList.appendChild(todoDiv)
    // Clear todo input value
    todoInput.value = ""

}

function deleteCheck(e) {
    const item = e.target
    //delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    // check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')

    }
}