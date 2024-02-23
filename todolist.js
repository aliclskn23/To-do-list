//görevleri bu diziye eklemek için boş dizi açıyoruz
let tasks=[];
//inputumuzu ve ekle butonumuzu çekiyoruz getlementbyid ile
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');


function addTask(){
    //newTaskInput adlı HTML input elementinden kullanıcının girdiği metni alır.
    const taskText = newTaskInput.value;

    //task adlı dizi obje açıp id:günceltarih olarak verip,text:taskText veriyoruz çünkü verdigi görev atanır
    //completed ise false ile başlaması gerek görev tamamlanmış gözükmemesi için baştan.
    const task ={
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    //oluşturulan görev objelerini push ile tasks boş dizi olana atanır.
    tasks.push(task);

    //render ile çeker güncelleriz
    renderTasks();
    //görev yazdıktan sonra input temiz kalması için value verip boş tırnak veriyoruz ki inputtext boş kalsın ekledikten sonra.
    newTaskInput.value='';

}


function renderTasks(){
    //HTML ögesini temizler yeni görev eklenen mevcut görevi sıfırlamış olursun
    taskList.innerHTML = '';

    //her görev için (foreAch) yineleyici fonksiyon başlatır.
tasks.forEach(task => {
    //creatElement ile li eklenir ve listelenmiş şekilde sıralanır
    const listItem = document.createElement('li');
    listItem.classList='compList';
    listItem.style.listStyleType='none';
    //ekledigiimiz li yani (listItem) innerHTML ile içerigini oluşturup silme butonu ve checkbox ekleriz
    listItem.innerHTML=`
    <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
    ${task.text}
    <button class="deleteBtn"  onclick="deleteTask(${task.id})">Sil</button> 
    `;
    //taskList kullanarak appenChild çagırıp html ekranın gösteririz
    taskList.appendChild(listItem);
})    
}

function deleteTask(taskId){
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}





