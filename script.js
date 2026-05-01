function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function() {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
