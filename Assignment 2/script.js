document.querySelector('button').addEventListener('click',(e) => {
    getCompletedTodos();
})

function getCompletedTodos()
{
    let values = []
    checked=document.querySelector('input[type="checkbox"]:checked')
    checked.forEach(chk => values.push(chk.values))
    console.log('values')
        
    
}

window.addEventListener('DOMContentLoaded',event =>
{
    div_todos = document.querySelector('#todos')

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json())
    .then(todos => 
        {
            todos.forEach(todos =>
                {
                    div_todos.innerHTML +=
                    `<input type = "checkbox" value= "${todo.id}" id="${todo.id}" ${todo.completed?"checked":"" }/>
                    <label for ="${todo.id}"> ${todo.title}</label> <br/>`
                });
        })
    .catch(err => console.error(err));
})
