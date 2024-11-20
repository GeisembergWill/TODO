const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() {//delete default task on click
    deleteTask(taskCard); // target the right task
});
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // add a task on click


const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector ("#todoCards");

function deleteTask(task){
    task.remove(); // remove the task
}
function addTask(){
    const newTask = taskCard.cloneNode(true) // clone the task card
    const NewDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')
    
    newTextArea.value = "New Task" //set new task text to "New Task"
    NewDelBtn.addEventListener('click',function(){ // edd delete event listener to new task
    deleteTask(newTask); // target the new task
    
    });
    tasksContainer.appendChild(newTask) // append new tasks to the tasks container
}






 







//const newTask = taskCard.cloneNode(true) // clone the task card








