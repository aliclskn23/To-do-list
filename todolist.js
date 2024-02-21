const addToDo = document.getElementById('addToDo');
const clearToDo = document.getElementById('clearToDo');
const toDoContainer = document.getElementById('toDoContainer');
const InputText = document.getElementById('InputText');
const taskCountElement = document.getElementById('taskCount');


let taskCount = 0;

addToDo.addEventListener("click", () => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = InputText.value;
    toDoContainer.appendChild(paragraph);
    InputText.value = '';

    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = 'line-through';
    });

    // Görev eklendiğinde sayacı güncelle
    updateTaskCount(1);
});

clearToDo.addEventListener("click", () => {
    // Tüm paragrafları temizlemek için
    toDoContainer.innerHTML = '';

    // Tüm görevleri sildiğimizde sayacı sıfırla
    updateTaskCount(0);
});

function updateTaskCount(change) {
    // Görev sayacını güncelle
    taskCount += change;
    taskCountElement.textContent = taskCount;
}

let isNightMode = false;

toggleMode.addEventListener("click", () => {
    isNightMode = !isNightMode;
    document.body.style.backgroundColor  = isNightMode ? '#333' : '#fff';
    document.body.style.color = isNightMode ? '#fff' : '#333';
})

  
 