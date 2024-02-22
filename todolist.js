let tasks = [];
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const InputText = document.getElementById('InputText');


function addTask() {
  const taskText = newTaskInput.value;
  
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);

  renderTasks();

  newTaskInput.value='';

}
function renderTasks(){
    
    taskList.innerHTML = '';

tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.classList='compList';
    listItem.style.listStyleType='none';
    listItem.innerHTML=`
    <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
    ${task.text}
    <button class="deleteBtn"  onclick="deleteTask(${task.id})">Sil</button> 
    `;
    taskList.appendChild(listItem);
})    
}

function deleteTask(taskId){
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}





