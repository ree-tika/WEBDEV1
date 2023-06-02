// Get DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Handle form submission
taskForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting and page refreshing
  
  const task = taskInput.value.trim();
  
  if (task !== '') {
    // Create a new task item
    const newTask = document.createElement('li');
    newTask.innerText = task;
    
    // Add event listener to mark task as completed when clicked
    newTask.addEventListener('click', function() {
      newTask.classList.toggle('completed');
    });
    
    // Append task item to the list
    taskList.appendChild(newTask);
    
    // Clear the input field
    taskInput.value = '';
  }
});
