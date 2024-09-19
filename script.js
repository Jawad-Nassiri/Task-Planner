document.getElementById('push').onclick = function() {
    const input = document.querySelector('#newtask input');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please Enter a Task");
        return;
    }

    document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span class="taskname">${taskText}</span>
            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `;

    document.querySelectorAll('.delete').forEach(button => {
        button.onclick = function() {
            this.closest('.task').remove();
        }
    });

    document.querySelectorAll('.task').forEach(task => {
        task.onclick = function() {
            this.classList.toggle('completed');
        }
    });

    input.value = '';
}




