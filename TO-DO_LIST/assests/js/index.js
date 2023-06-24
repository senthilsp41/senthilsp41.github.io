let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage
let todos = [];
window.onload = ()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || [] //local storage to get todo key if that string are converted to parse then parse value store to todos incase parse not work then consider empty array
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=> {
    todos.push(input.value)  // to push the input value in array
    addtodo(input.value)     // add the input value
    localStorage.setItem('todos',JSON.stringify(todos))  //to store entire array and convert to string

    input.value=''
})

function addtodo(todo){
   let para = document.createElement('p'); // to add a paragraph element
   para.innerText = todo;
   todoList.appendChild(para)

   
   para.addEventListener('click',()=>{
    para.style.textDecoration = 'line-through'  // to strictout the para
    remove(todo)
   })
   para.addEventListener('dblclick',()=>{
     todoList.removeChild(para)
     remove(todo)
   })
}
function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
    todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}
