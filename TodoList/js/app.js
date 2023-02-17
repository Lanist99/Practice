const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function addTodo() {
  event.preventDefault();
  const todoText = todoInput.value;
  if (todoText.trim() === '') {
    return;
  }
  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false
  };
  todos.push(todo);
  todoInput.value = '';
  renderTodos();
}

function toggleTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    const task = document.createElement('span');
    task.textContent = todo.text;
    task.classList.add('task');
    if (todo.completed) {
      task.classList.add('completed');
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));
    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

todoForm.addEventListener('submit', addTodo);
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const label = document.createElement('label');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.id = 'todo-' + todo.id;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    const task = document.createElement('span');
    task.textContent = todo.text;
    task.classList.add('task');
    if (todo.completed) {
      task.classList.add('completed');
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));
    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(deleteButton);
    label.appendChild(li);
    todoList.appendChild(label);
  });
}
