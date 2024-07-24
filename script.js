document.querySelector('#push').onclick=function(){
    if(document.querySelector('#Newtask input').value.length==0){
        alert("please enter new task")
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
        <div class='task'>
            <span id="taskname">
                ${document.querySelector('#Newtask input').value}
            </span>
            <button class="delete">delete</button>
        </div>

    `;

var current_tasks = document.querySelectorAll('.delete');
for (var i=0; i<current_tasks.length;i++){
    current_tasks[i].onclick =function(){
        this.parentNode.remove();
    }
} 
document.querySelector("#Newtask input").value="";
}

}