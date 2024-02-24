# To-do-list
## Kullanılan Teknolojiler

- JavaScript
- Html
- Css
- React

## Sayaç 
- function updateTaskCount(change) {
    // Görev sayacını güncelle
    taskCount += change;
    taskCountElement.textContent = taskCount;
}
## change komutu vererek taskCount artırıyoruz 

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
## Görüldügü üzere  updateTaskCount(1); görev eklendiginde sayacı güncelliyoruz

clearToDo.addEventListener("click", () => {
    // Tüm paragrafları temizlemek için
    toDoContainer.innerHTML = '';

    // Tüm görevleri sildiğimizde sayacı sıfırla
    updateTaskCount(0);
});
# Eklenen görevleri sildigimde sayacımızı sıfırlıyoruz 
