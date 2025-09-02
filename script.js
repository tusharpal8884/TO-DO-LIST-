function createTodoItem() {
    let inputVal = document.querySelector(".input-box input").value;

    if (inputVal === "") {
        alert("Please enter a task");
        return;
    }

    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    todoItem.innerHTML = `
        <p class="todo-text">${inputVal}</p>
        <div class="edit-box">
            <input type="text" placeholder="Edit task">
            <i onclick="editTodo(event)" class="fa-solid fa-pen-to-square"></i>
        </div>
        <button onclick="edit_toggle(event)">Edit</button>
        <i onclick="deleteTodoItem(event)" class="fa-solid fa-trash"></i>
    `;

    document.querySelector(".todo-items").appendChild(todoItem);

    document.querySelector(".input-box input").value = "";
}

function deleteTodoItem(event) {
    event.target.parentElement.remove();
}

function edit_toggle(event) {
    let todoItem = event.target.parentElement;
    let editBox = todoItem.querySelector(".edit-box");

    // toggle show/hide
    if (editBox.style.display === "none" || editBox.style.display === "") {
        editBox.style.display = "flex";
        event.target.innerText = "Close";
    } else {
        editBox.style.display = "none";
        event.target.innerText = "Edit";
    }
}

function editTodo(e) {
    let editInput = e.target.previousElementSibling;
    let newValue = editInput.value.trim();

    if (newValue !== "") {
        e.target.closest(".todo-item").querySelector(".todo-text").innerText = newValue;
        editInput.value = "";
    }

    // hide edit box again
    e.target.parentElement.style.display = "none";
    e.target.closest(".todo-item").querySelector("button").innerText = "Edit";
}
