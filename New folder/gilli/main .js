document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function() {
            taskItem.remove();
        });

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.className = "complete-btn";
        completeBtn.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });

        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
});
