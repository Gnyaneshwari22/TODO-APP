console.log("welcome all")
const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById("list-container");


function AddTask(){                          //addin todo task in the list
    if (inputBox.value === ''){
        alert("You must enter the task before adding");
    }
    else{
        var li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");               //toggling the tasks (chechikng or unchecking)
        saveData();
    }
    else if(e.target.tagName === "SPAN"){                    
        e.target.parentElement.remove();              //removing the tasks
        saveData();
    }
},false);

function saveData(){                //for saviing the tasks in localstorage of browser
    localStorage.setItem("data",listContainer.innerHTML);
    
}

function showTask(){ //showing the todo  tasks
    listContainer.innerHTML=localStorage.getItem("data"); 
    
}
showTask();   //initially rendering todo lists on ui 