const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const todo = JSON.parse(localStorage.getItem('lists'));
if (todo) {

}


form.addEventListener("submit", (e)=>{

  e.preventDefault();
  const todoText = input.value;
  if(todoText){
    const todoE1 = document.createElement('li');
    todoE1.innerHTML = todoText;
    todoE1.addEventListener("click", ()=>{
      todoE1.classList.toggle("completed");
      updateLS();
    });


    todoE1.addEventListener("contextmenu", (e) =>{
      e.preventDefault();
      todoE1.remove();
      updateLS();
    });

    todos.appendChild(todoE1);
     input.value ="";
     console.log(todos);

   }
});
function updateLS() {
    const list =  document.querySelectorAll('li');
    const todo = [];


    list.forEach((todoEl)=>{
      todo.push(todoEl.todoText);
      

    });
    localStorage.setItem("lists",JSON.stringify(todo));
  }
