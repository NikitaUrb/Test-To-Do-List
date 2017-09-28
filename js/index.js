console.log("Я работаю.");

function time() {
	const date = new Date();
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('month').innerHTML = date.getMonth() + 1;
	document.getElementById('year').innerHTML = date.getFullYear();
}
time();

function toDoAdd() {
	var valueToDo = document.getElementById('inquiry').value;
	var list = document.getElementById('listToDo');
	var li = document.createElement('li');
	li.innerHTML = valueToDo;
	list.appendChild(li);
	document.getElementById('inquiry').value = "";
}

console.log("Я все еще работаю");
