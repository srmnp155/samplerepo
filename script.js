const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const flash = document.getElementById('flash');

function showFlash(message, type = 'success') {
  flash.textContent = message;
  flash.className = `flash show ${type}`;
  setTimeout(() => {
    flash.classList.remove('show');
  }, 2000);
}

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Toggle completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    list.removeChild(li);
    showFlash('Task deleted', 'success');
  });

  li.appendChild(deleteBtn);
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) {
    showFlash('Please enter a task', 'error');
    return;
  }
  const todoItem = createTodoItem(text);
  list.appendChild(todoItem);
  input.value = '';
  showFlash('Task added', 'success');
});
