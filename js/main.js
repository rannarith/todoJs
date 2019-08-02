// Single Element 
// console.log(document.getElementById('todo-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.todolist'));
// console.log(document.getElementsByClassName('todolist'));
// console.log(document.getElementsByTagName('li'));

const todolists = document.querySelectorAll('.todolist');
todolists.forEach((todolist) => console.log(todolist));

const ul = document.querySelector('.todolists');
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Never give up';
ul.lastElementChild.innerHTML = '<h2>Stay Focus</h2>';

const btn = document.querySelector('.btn');
btn.style.background = 'gray';
