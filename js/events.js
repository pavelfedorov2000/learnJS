'use strict';

function fun1() {
    let select = document.getElementById('fruits').selectedIndex;
    let options = document.getElementById('fruits').options;
    alert('Выбрана опция ' + options[select].text);
}

function fun2() {
    let range = document.getElementById('range');
    let output = document.getElementById('output');
    let input = document.getElementById('input');
    let div = document.getElementById('test');
    output.innerHTML = range.value;
    input.value = range.value;
    div.style.width = range.value + 'px';
}