let tasks = [];

function addTask(){

    const input =
        document.getElementById("taskInput");

    const taskText =
        input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";

    renderTasks();
}

function renderTasks(filter = "all"){

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if(filter === "completed"){
        filteredTasks =
            tasks.filter(task =>
                task.completed
            );
    }

    else if(filter === "pending"){
        filteredTasks =
            tasks.filter(task =>
                !task.completed
            );
    }

    filteredTasks.forEach(
        (task, index) => {

        const li =
            document.createElement("li");

        li.innerHTML = `
            <span class="${
                task.completed
                ? "completed"
                : ""
            }">

                ${task.text}

            </span>

            <div class="actions">

                <button
                    class="complete-btn"
                    onclick="toggleTask(${index})">

                    ${
                        task.completed
                        ? "Undo"
                        : "Done"
                    }

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${index})">

                    Delete

                </button>

            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleTask(index){

    tasks[index].completed =
        !tasks[index].completed;

    renderTasks();
}

function deleteTask(index){

    tasks.splice(index, 1);

    renderTasks();
}

function filterTasks(type){

    renderTasks(type);
}
