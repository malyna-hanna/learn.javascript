button.onclick = function() {
const myInput = document.getElementById('myInput').value;  
document.getElementById('myInput').value = '';
console.log(myInput);
let li = document.createElement('li');
li.innerHTML = myInput;
const list = document.getElementById('toDoList').append(li); 
  };
