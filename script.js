const inputTask = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
let LSTaskList = JSON.parse(localStorage.getItem("tasks")) || [];

if (LSTaskList.length) {
        LSTaskList.map(task => addTask(task.value, task.checked));
}

function addTask(value, checked) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = checked;

        const task = document.createElement('span');
        const taskContent = document.createTextNode(value);
        task.setAttribute('class', 'task');
        task.appendChild(taskContent);

        const button = document.createElement('button');
        const buttonContent = document.createTextNode('X');
        button.setAttribute('class', 'delete-btn');
        button.appendChild(buttonContent);
        button.addEventListener('click', (event) => {
                taskList.removeChild(event.currentTarget.parentNode);
        });

        li.appendChild(checkbox);
        li.appendChild(task);
        li.appendChild(button);

        taskList.appendChild(li);
}

addTaskButton.addEventListener('click', () => {
        const taskValue = inputTask.value;
        addTask(taskValue, false);
        LSTaskList.push({ value: taskValue, checked: false });
        localStorage.setItem('tasks', JSON.stringify(LSTaskList));
        inputTask.value = '';
});
