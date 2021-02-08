
let button = document.querySelector('button');
let fullName = document.querySelector('#full-name');

button.addEventListener('click', function(event) {
    console.log(event);
    event.preventDefault();
});

fullName.addEventListener('keydown', function(event) { // при нажатии на клавищу
    if (event.key == 'я') {
        event.preventDefault();
    }
});
fullName.addEventListener('input', function(event) { // при измении поля ввода
    console.log('input');
});
fullName.addEventListener('keyup', function(event) { // при отпускании клавищи
    console.log('keyup');
});
fullName.addEventListener('change', function(event) { // при изменении поля (потеря фокуса)
    console.log('change');
});
fullName.addEventListener('copy', function(event) { // при копировании
    console.log(event);
});
fullName.addEventListener('paste', function(event) { // при вставке
    console.log('paste');
});