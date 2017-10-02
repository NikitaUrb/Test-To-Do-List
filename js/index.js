function time() {
	const date = new Date();
	const month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	];
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('month').innerHTML = month[date.getMonth()];
	document.getElementById('year').innerHTML = date.getFullYear();
}
time();

function disclosure(objName) {
	var object = document.getElementById(objName);
	if (object.style.display == 'none'){
		object.style.display = 'block';
		}
	else {
		object.style.display = 'none';
	}
}

function toDoAdd() {
	var valueToDo = document.getElementById('inquiry').value;
	var list = document.getElementById('listToDo');
	var li = document.createElement('li');
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

