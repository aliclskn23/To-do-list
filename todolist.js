const addToDo = document.getElementById('addToDo');
const clearToDo = document.getElementById('clearToDo');
const toDoContainer = document.getElementById('toDoContainer');
const InputText = document.getElementById('InputText');


addToDo.addEventListener("click" ,()=>{
    const paragraph = document.createElement('p');
    paragraph.innerHTML = InputText.value;
    toDoContainer.appendChild(paragraph);
    InputText.value = '';

    paragraph.addEventListener("click" ,() =>{
        paragraph.style.textDecoration ='line-through'
    });
});

clearToDo.addEventListener("click",()=>{
    toDoContainer.innerHTML='';
});

let isNightMode = false;

toggleMode.addEventListener("click", () => {
    isNightMode = !isNightMode;
    document.body.style.backgroundColor  = isNightMode ? '#333' : '#fff';
    document.body.style.color = isNightMode ? '#fff' : '#333';
})

  
 