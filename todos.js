var listElement = document.querySelector('#app ul');
console.log(listElement);

var inputElemnt = document.querySelector('#app input');
console.log(inputElemnt);

var buttonElemnt = document.querySelector('#app button');
console.log(buttonElemnt);

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){

    listElement.innerHTML = '';
    for(todo of todos){
        var todoElemnt = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#')

        var pos = todos.indexOf(todo);
         console.log(pos);
     
        linkElement.setAttribute('onclick','deleteTodo('+ pos + ')');

        var linkText = document.createTextNode('Excluir');       
        linkElement.appendChild(linkText);

        todoElemnt.appendChild(todoText);
        todoElemnt.appendChild(linkElement);
        listElement.appendChild(todoElemnt);

        console.log(todo);
    }
}

function addTodo(){
    var todoText = inputElemnt.value;
todos.push(todoText);
inputElemnt.value ='';
renderTodos();
saveToStorage();
}

function deleteTodo(pos){

    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    
    localStorage.setItem('list_todos',JSON.stringify(todos));

}

buttonElemnt.onclick = addTodo;

