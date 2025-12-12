const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        li.style.animation = "fadeOut 0.4s forwards";
        setTimeout(() => li.remove(), 350);
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
