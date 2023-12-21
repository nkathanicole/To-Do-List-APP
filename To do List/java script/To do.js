function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value;
  
    if (taskValue.trim() !== '') {

      var newTask = document.createElement('li');
      newTask.innerHTML = taskValue + '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
  
      var taskList = document.getElementById('taskList');
      taskList.appendChild(newTask);
  
      taskInput.value = '';
    }
  }

  function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
  