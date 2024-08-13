const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const crossChar = '\u00d7';

function AddTarea() {
	if(inputBox.value === ''){
		alert('No puedes agregar una tarea vacía');
	}
	else{
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = crossChar;
		li.appendChild(span); 
	}
	inputBox.value = '';
	saveData();
}

listContainer.addEventListener('click', function(e){
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked');
		saveData();
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
		saveData();
	}
}, false);

function saveData(){
	localStorage.setItem('data', listContainer.innerHTML);
}
function showTarea(){
	listContainer.innerHTML = localStorage.getItem('data');
}

showTarea();