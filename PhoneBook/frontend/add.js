let API="http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("form");

   
    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const num = document.getElementById("number").value.trim();
        const fullname=`${firstName} ${lastName}   `

        console.log(fullname);

        try {
            const res= await fetch(API+"/addnum",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullname,num})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                window.location.href="../index.html"
            }else{
                alert("not added")
            }
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
});


async function getTodos(){
    try {
        const res= await fetch(API+"/getnum")
        if(res.status==200){
            const data=await res.json();
            str=``
            data.map((dt)=>{

            
                
                str+=`
                <tr>
                    <td>${dt.fullname}</td>
                    <td>${dt.num}</td>
                    <td>
                        <button class="btn btn-edit" onclick="editnum('${dt._id}')">Edit</button>
                        <button class="btn btn-delete" onclick="deletenum('${dt._id}')">Delete</button>
                    </td>
                </tr>
                `
            })
            document.getElementById("tbody").innerHTML=str;
        }
    } catch (error) {
        console.log(error);
        
    }
}
getTodos()


async function deletenum(_id){
    console.log(_id);
    const res=await fetch(API+`/deletenum/${_id}`,
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

async function editnum(_id){
    // console.log(_id);
    const fullname=prompt("edit name");
    const num=(prompt("edit number"))
    const res=await fetch(API+`/edit/${_id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullname,num})
        }
        
    )
    if(res.status==200){
        const {msg}=await res.json();
        alert(msg);
        getTodos();
    }

}