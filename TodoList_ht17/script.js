const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';
const DONE_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;

const taskInput = document.getElementById('taskNameInput');
const taskTemplate = document.getElementById('newTaskTemplate').innerHTML;
const listEl = document.getElementById('taskList');

let todoList = [];

listEl.addEventListener('click', onListClick);

init();

function init(){
    fetchTodos();
}

function onListClick(e){
    const taskEl = getTaskElement(e.target);
    switch(true){
        case e.target.classList.contains(DELETE_BTN_CLASS):
        return deleteTodo(+taskEl.dataset.id);
        case e.target.classList.contains(TASK_ITEM_CLASS):
        return toggleTodo(+taskEl.dataset.id);
    }
}

function toggleTodo(todoId){
    const todo = todoList.find((todo) => todo.id === todoId);
    todo.completed = !todo.completed;

    renderTodos(todoList);
}

function deleteTodo(id){
    todoList = todoList.filter(todo => todo.id !== id);

    renderTodos(todoList);
}
function getTaskElement(el){
    return el.closest(TASK_ITEM_SELECTOR);
}

function fetchTodos(){
    fetch(TODOS_URL)
    .then((res) => res.json())
    .then(setTodos)
    .then(renderTodos);
}

function setTodos(list){
    return (todoList = list);
}
function renderTodos(list){
  const html = list.map(getTodoHlml).join('');
  listEl.innerHTML = html;
}

function getTodoHlml(todo){
 return taskTemplate
   .replace('{{doneClass}}', todo.completed ? DONE_CLASS : '')
   .replace('{{text}}', todo.title)
   .replace('{{id}}', todo.id);
}






