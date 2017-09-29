console.log("Я работаю.");

function time() {
	const date = new Date();
	const month = [
		'Jan.',
		'Feb.',
		'Mar.',
		'Apr.',
		'May',
		'June',
		'July',
		'Aug',
		'Sept.',
		'Oct. ',
		'Nov.',
		'Dec.'
	];
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('month').innerHTML = month[date.getMonth()];
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
	li.innerHTML = valueToDo;
	list.appendChild(li);
	document.getElementById('inquiry').value = "";
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('complete');
  }
}, false);


console.log("Я все еще работаю");

