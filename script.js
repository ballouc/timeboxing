const planField = document.getElementById('plan-field');

function clickTask(){
    const newText = prompt("Task: ");
    this.innerText = newText;
}

// function Clear All button
function clearAll(){
    var inputAreas = document.querySelectorAll(".input-area");
    for ( var i = 0; i < inputAreas.length; i++){
        inputAreas[i].innerText = "";
    }
}

document.querySelectorAll('#input-field').forEach(e =>e.addEventListener('click', clickTask));