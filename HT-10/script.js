button.onclick = function() {

const name = document.getElementById('name').value;  
const surname = document.getElementById('surname').value;
const phone = document.getElementById('phone').value;

document.getElementById('name').value='';

document.getElementById('surname').value='';

document.getElementById('phone').value='';
document.getElementById('name').focus();

let tr = document.createElement('tr');
let tdName = document.createElement('td');
let tdSurname = document.createElement('td');
let tdPhone = document.createElement('td');
let tdAct = document.createElement('td');

tdName.innerHTML = name;
tdSurname.innerHTML = surname;
tdPhone.innerHTML = phone;
tdAct.innerHTML = 'X';

tr.append(tdName);
tr.append(tdSurname);
tr.append(tdPhone);
tr.append(tdAct);

const table = document.getElementById('contacts').append(tr); 
  };
