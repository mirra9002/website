let ul1 = document.getElementById("ul1");
let addTaskBt = document.getElementById("add-task-bt");
let input1 = document.getElementById("input1");
let resetBt = document.getElementById("reset-bt");

function addTask(){
    let newTask = document.createElement('li');
    if(input1.value != ''){
        newTask.textContent = input1.value;
    }
    else {
        newTask.textContent = "empty task";
        newTask.style.fontStyle = "italic";
    }

    newTask.onclick = function(){
        newTask.classList.toggle("completed");
    }
    
    ul1.appendChild(newTask);
    input1.value = null;
}


addTaskBt.onclick = addTask;
    
    
input1.addEventListener('keydown', function(event){
    if(event.key == 'Enter')
    {
        addTask();
    }
});

resetBt.onclick = function(){
    ul1.innerHTML = null;
}
