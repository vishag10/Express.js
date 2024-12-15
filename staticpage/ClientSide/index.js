let API="http://localhost:3000";

async function addTodo(){
    try {
        
        const task=document.getElementById("task").value;
        const res= await fetch("http://localhost:3000/addtodo",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({task})
        })
        if(res.status==200){
            const {msg}=await res.json();
            alert(msg);
            document.getElementById("task").value=""
            getTodos()
        }else{
            alert("not added")
        }

        
    } catch (error) {
        console.log(error);
        
    }
}

async function getTodos(){
    try {
        const res= await fetch(API+"/gettodos")
        if(res.status==200){
            const data=await res.json();
            str=``
            data.map((dt)=>{
                str+=`
                <li ><span  style="text-decoration:${dt.isCompleted?"line-through red":"none"}">
                ${dt.task}</span>
                <div>
               <span> <button onclick="isCompleted('${dt._id}',${dt.isCompleted})" class="dd">${dt.isCompleted?"not completed":"completed"}</button>
                <button onclick="deleteTodo('${dt._id}')" class="ff">delete</button><button onclick="editTodo('${dt._id}')" class="ff">edit</button>
                </div>
                </li></span>
                `
            })
            document.getElementById("list").innerHTML=str;
        }
    } catch (error) {
        console.log(error);
        
    }
}
getTodos()


async function isCompleted(_id,isCompleted){
    const res=await fetch(API+`/iscompleted/${_id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({isCompleted})
        }
    )
    console.log(res);
    if(res.status==201){
        getTodos();
    }
    
}

 async function deleteTodo(_id){
    console.log(_id);
    const res=await fetch(API+`/deletetodo/${_id}`,
        {
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }
    )
    if(res.status==200){
        // alert("Task deleted successfully");
        getTodos();
    }
        
}
async function editTodo(_id){
    // console.log(_id);
    const task=prompt("Edit task");
    const res=await fetch(API+`/update/${_id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({task})
        }
        
    )
    if(res.status==200){
        const {msg}=await res.json();
        alert(msg);
        getTodos();
    }

}