let tasks = [];

function openTaskPage() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("taskInput").focus();
}

function closeTaskPage() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("taskInput").value = "";
}

function addTask() {
  //kullanıcın girdigi görevi al
  const taskText = document.getElementById("taskInput").value;
  //eger görev boş degil ise
  if (taskText.trim() !== "") {
    //görevi listeye eklemek üzere başka bir fonksiyona yönlendir
    addTaskToList(taskText);
  }
  //overlay style ile none vererek görev verdikten overlay'i gizle
  document.getElementById("overlay").style.display = "none";
  //inputu temizle
  document.getElementById("taskInput").value = "";
}

//görev listesine yeni bir görev için kullanılır addTaskToList
function addTaskToList(taskText) {
  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.style.listStyleType = "none";
  //taskItem innetHTML verek görev ekledikten sonra görünecek button ve inputu ekliyoruz
  taskItem.innerHTML = `
    <input type="checkbox" onclick="toggleTaskCompletion(this)">
    <span>${taskText}</span>
    <button class="deleteBtn" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
    `;
  //appenChild yaparak ekledigimiz tasarımı taskItem(li) ile görmek için atarız
  taskList.appendChild(taskItem);
}

//parametre vererek (button)
function deleteTask(button) {
  //taskItem'e atayarak

  const taskItem = button.parentElement;
  //remove ile silme işlemi saglıyoruz.
  taskItem.remove();
}

function toggleTaskCompletion(checkbox) {
  //const taskText = checkbox.nextElementSibling; satırı, verilen bir checkbox öğesinin hemen sonraki kardeş öğesini (nextElementSibling) seçer ve bu öğeyi taskText adlı bir değişkene atar.
  const taskText = checkbox.nextElementSibling;

  //eger checkbox checked olduysa class atayıp stil veriyoruz
  if (checkbox.checked) {
    taskText.parentElement.classList.add("completed");
  }
  //burda ise tam tersi completed classını kaldırır
  else {
    taskText.parentElement.classList.remove("completed");
  }
}

//GECE GÜNDÜZ MODU

const darkModeBtn = document.getElementById("darkModeBtn");

let darkMode = false;

darkModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = "wheat";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "darkgrey";
    document.body.style.color = "white";
  }
});
