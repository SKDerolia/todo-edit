// var arr = [];// isko global pe nahi rakhna hota to solve kaise karenge function me rakh ke
// pin local storage 
// let const var
const listel = document.querySelector("#cont");
function ditto() {
    var inpu = document.getElementById("inp").value;

    // let arr = [];
    // arr.push(inpu);
    //    for(var x = 0; x<= arr.length-1;x++){
    //     console.log(arr);}


    if (inpu == "") {
        alert("add text");
    }
    else {
            const taskel =document.createElement('div');
            taskel.classList.add('tasker');

            const taskcontentel = document.createElement('div');
            taskcontentel.classList.add('content');

            taskel.appendChild(taskcontentel);

            const task
        // document.querySelector('#cont').innerHTML += `
        // <div class="classpan" onclick = "edititem(event)">
        //             ${document.querySelector('.inputfield input').value}

        //         <button class="delete">
        //             <i class="far fa-trash-alt"></i>
        //         </button>
                
        //         <button class="edit">
        //         <i class="fas fa-minus"></i>
        //     </button>
        //     </div>
        //     `;
        var current_tasks = document.querySelectorAll(".delete"); //ARRAY ME AAJAYENGE
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        document.getElementById("inp").value = "";
    }
}

function edititem(e){
    e.target.innerHTML = `${document.getElementById("inp").value}`
}

function deletefunc() {
    var y = document.getElementById("cont");
    y.removeChild(y.firstChild);
}






 // task_edit_el.addEventListener('click', () => {
    //     if (task_edit_el.innerText == "EDIT") 
    //     {
    //         task_edit_el.innerText = "Save";
    //         task_input_el.removeAttribute("readonly");
    //         // task_input_el.focus();
    //     } else 
    //     {
    //         task_edit_el.innerText = "Edit";
    //         task_input_el.setAttribute("readonly", "readonly");
    //     }
    // });