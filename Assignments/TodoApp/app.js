const ipBox = document.querySelector("#ipbox");
const addBtn = document.querySelector("#addbtn");
const ul = document.querySelector("#ul");



function remove(){
    li.remove();
}

addBtn.addEventListener("click",()=>{
    const newEntry = ipBox.value;
    const li= document.createElement("li");
    const del = document.createElement('button')
    const edit = document.createElement('button')

    if(newEntry.trim()!="")
    { 
    li.innerText=newEntry;
    del.id="delbtn";
    del.innerText = "🗑"; 
    edit.id="editbtn";
    edit.innerText="✎";
    del.addEventListener("click",()=>{
        li.remove();
    })
    edit.addEventListener("click",()=>{
        li.contentEditable = "true";
        li.style="background-color:black;color:white"
        li.addEventListener("click",()=>{
            
        })
        li.addEventListener("dblclick",()=>{
            li.style="";
            li.contentEditable = "false";
       
            
        })
        
    })
    ul.append(li);
    li.append(del); 
    li.append(edit)
    ipBox.value="";
    } else{
        alert("To Do can't be empty");
    }
    
});
 