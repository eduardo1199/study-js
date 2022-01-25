const input = document.querySelector('.input-tarefa');
const button = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function saveTaskLocalStorage () {
  const listElements = tarefas.querySelectorAll('li');
  const arrayListElements = [];

  for(let task of listElements) {
    let textTask = (task.innerText.replace('Delete', '')).trim();
    arrayListElements.push(textTask);
  }

  localStorage.setItem('tasks', JSON.stringify(arrayListElements));

}

function createButtonDelete (li) {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.setAttribute('class', 'delete-btn');

  li.appendChild(button);
}


function handleTask(value) {
  const li = document.createElement('li');
  li.innerText = value + ' ';

  createButtonDelete(li);

  tarefas.appendChild(li);

  saveTaskLocalStorage();
  input.value = '';
  input.focus();
}

function handleTaskSave () {
  const tasksSaved = JSON.parse(localStorage.getItem('tasks'));

  for(let taskSaved of tasksSaved) {
    handleTask(taskSaved);
  }
}

input.addEventListener('keypress', (e) => {
  if(e.charCode === 13 && input.value) {
    handleTask(input.value);
  }

  return;
})

button.addEventListener('click', () => {
  if(!input.value) {
    return;
  }

  handleTask(input.value);
})

document.addEventListener('click', (e) => {
  const element = e.target;

  if(element.classList.contains('delete-btn')){
    element.parentElement.remove();
    saveTaskLocalStorage();
  }
})

handleTaskSave();
