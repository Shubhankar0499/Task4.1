document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDateTime = document.getElementById('task-datetime');
    const taskText = taskInput.value.trim();
    const taskDateTimeValue = taskDateTime.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} (Due: ${new Date(taskDateTimeValue).toLocaleString()})`;

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        taskInput.value = taskText;
        taskDateTime.value = taskDateTimeValue;
        taskList.removeChild(taskItem);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDateTime.value = '';
}
