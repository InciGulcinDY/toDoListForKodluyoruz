let taskListDOM = document.querySelector('#taskList'); //DOM for task list
//Toast(s)-Initialize
let successToast = new bootstrap.Toast(document.getElementById('successToast')); 
let errorToast = new bootstrap.Toast(document.getElementById('errorToast'));

//New task rules , DOM for new task
function newTask(){
    let taskDOM = document.querySelector('#task');
    let task = taskDOM.value;

    if(taskDOM.value){
        addTask(task);   
        successToast.show();    //Show the toast 
        taskDOM.value = ``;     //Clear the new task area
    }else{
        errorToast.show();      //Show the toast 
    }    
}

//Adding new task to the list
function addTask(task){
    let buttonDOM = document.createElement('button');  

    buttonDOM.innerHTML = `${task}
    <span type="button" class="btn btn-light btn-close" aria-label="Close" onclick="deleteTask(this)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
        `
    buttonDOM.classList.add(
        'task','list-group-item','list-group-item-action','d-flex','justify-content-between','align-items-center' 
    ) 
    buttonDOM.setAttribute("onclick" , "completeTask(this)");
    
    
    taskListDOM.append(buttonDOM);
}

//Deleting the task
function deleteTask(closeButton){
    let taskItem = closeButton.closest('.task');
    taskItem.remove();
}

//Complete the task
function completeTask(taskButton){
    let  task = taskButton.innerHTML;

    taskButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
     <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
    ${task} 
        `
    taskButton.classList.add(
        'task','list-group-item','list-group-item-action','d-flex','justify-content-between','align-items-center','text-decoration-line-through','btn-secondary','checked'
    ) 
}