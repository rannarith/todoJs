// Single Element 
// console.log(document.getElementById('todo-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.todolist'));
// console.log(document.getElementsByClassName('todolist'));
// console.log(document.getElementsByTagName('li'));

const todolists = document.querySelectorAll('.todolist');
todolists.forEach((todolist) => console.log(todolist));