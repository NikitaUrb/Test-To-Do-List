console.log("Я работаю.");

function time() {
	const date = new Date();
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('month').innerHTML = date.getMonth() + 1;
	document.getElementById('year').innerHTML = date.getFullYear();
}
time();

function block(objName) {
	object = document.getElementById(objName);
	if (object.style.display == 'none'){
		object.style.display = 'block';
		}
	else {
		object.style.display = 'none';
	}
}

function toDoAdd() {
	valueToDo = document.getElementById('inquiry').value;
	list = document.getElementById('listToDo');
	li = document.createElement('li');
	console.log(valueToDo);
	console.log(list);
	console.log(li);
	li.innerHTML = valueToDo;
	list.appendChild(li);
	document.getElementById('inquiry').value = "";
}

console.log("Я все еще работаю");
