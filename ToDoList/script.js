const button = document.getElementById('add-task');
const taskInput = document.getElementById('tast-input');
const taskList = document.getElementById('task-list');

   button.addEventListener('click', onAddBtnClick);

   function onAddBtnClick(){
    const taskName = taskInput.value;
    clearInput();

const span = document.createElement('span');
span.className = 'delete';
span.innerHTML = " X"

span.addEventListener('click', removeTask);

function removeTask(event){
    const element = event.target;
    element.parentElement.remove();
}

const li = document.createElement('li');
li.innerHTML =  taskName;

li.addEventListener('click', changeState);

function changeState(event){
    const el = event.target;
    el.classList.toggle('green');
}
function clearInput(){
    taskInput.value = '';
}
li.append(span);
taskList.append(li);
   }










