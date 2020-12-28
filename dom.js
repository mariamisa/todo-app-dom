const inputValue = document.getElementById('input__todo');
const addBtn = document.getElementById('add__todo');
const containerData = document.getElementById('container');
const deleteCompletes = document.getElementById('delete_completes');
const deleteAll = document.getElementById('delete_all');

let todos = [];
let id = 0;

function renderData(data) {
  containerData.textContent = '';
  data.forEach(({ title, completed ,id},index) => {
    const todoName = document.createElement('p');
    todoName.classList.toggle('titleTodo');
    todoName.textContent = `${index+1}.${title}`;
    containerData.appendChild(todoName);
    completed && todoName.classList.toggle('completed-todo');

    todoName.addEventListener('dblclick', (e) => {
      todos.forEach((el, index) => {
        if (el.title === e.target.textContent.split('.')[1]) {
          todos[index].completed = !el.completed;
          todoName.classList.toggle('completed-todo');
        }
      });
    });
  });
}
addBtn.addEventListener('click', () => {
  const newTodoObject = { id: ++id, title: inputValue.value, completed: false };
  todos = [...todos, newTodoObject];
  inputValue.value = '';
  renderData(todos);
});

deleteAll.addEventListener('click', () => {
  todos = [];
  id = 0;
  containerData.textContent = '';
});

deleteCompletes.addEventListener('click', () => {
  const deleteCompletedTodo = todos.filter((todo) => !todo.completed);
  todos = deleteCompletedTodo;
  renderData(todos);
});
