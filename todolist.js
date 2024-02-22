let tasks = [];
// Input ve listeyi seç
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
const InputText = document.getElementById('InputText');


// Görev ekleme fonksiyonu
function addTask() {
  const taskText = newTaskInput.value;
  
  // Görev objesini oluştur
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  // Görevi diziye ekle
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





