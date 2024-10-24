document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText) {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(text) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = text;
    todoItem.appendChild(taskText);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.classList.add('button-icon', 'complete-btn');
    completeBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        todoItem.classList.toggle('completed');
    });
    todoItem.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '—';
    deleteBtn.classList.add('button-icon', 'delete-btn');
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        todoList.removeChild(todoItem);
    });
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
}