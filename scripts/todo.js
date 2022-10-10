import {shownDate} from './shownDate.js'

let inputText = document.querySelector('#print-text');
let btnAdd = document.querySelector('#click-btn');
let ulList = document.getElementById('list');
let allLi = document.getElementsByTagName('li');
let allSpan = document.getElementsByTagName('span');
let saveBtn = document.querySelector('#save-btn');
let clearBtn = document.querySelector('#clear-btn');

let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let closeBtn = document.getElementsByClassName("close")[0];

let countMinus = document.querySelector('#countDisable');
let countPlus = document.querySelector('#countActive');
var countActive = 0;
let countDisable = 0;

let negative = [];
let positive = [];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


btnAdd.onclick = function () {

    let date= shownDate()

    while (inputText.value != '' && inputText.value.trim() !== "") {
        let newTodo = inputText.value;
        inputText.value = '';
        let newLi = document.createElement('li');
        let newSpan = document.createElement('span');
        newSpan.className = 'fa fa-trash';
        ulList.appendChild(newLi).append(newSpan, newTodo, " ", ` ${date.hours}:${date.minutes}:${date.seconds} ${days[date.day]}, ${months[date.month]} ${date.monthDay} ${date.year} `);

        counterDisable();
        counterActive()
    }
    closeTodo();
    deleteTodo();
}

function closeTodo() {
    for (let tagLi of allLi) {
        tagLi.onclick = function () {
            tagLi.classList.toggle('text-decor');
        }
    }
}

function deleteTodo() {
    for (let tagSpan of allSpan) {
        tagSpan.onclick = function () {
            tagSpan.parentNode.remove();
        }
    }
}

function loadTodo() {
    ulList.innerHTML = localStorage.getItem('todo-list');
}

function saveTodo() {
    localStorage.setItem('todo-list', ulList.innerHTML);
}

saveBtn.onclick = saveTodo;

clearBtn.onclick = function () {
    if (localStorage.getItem('todo-list')) {
        ulList.innerHTML = '';
        localStorage.setItem('todo-list', ulList.innerHTML);
    }
}

function counterDisable() {

    for (let listLi of allLi) {
        if (listLi.classList.contains("text-decor")) {
            negative.push(listLi);
            countDisable = negative.length;
        }
    }

    return countDisable;
}

function counterActive() {

    for (let getListLi of allLi) {
        if (!getListLi.classList.contains("text-decor")) {
            positive.push(getListLi);
            countActive = positive.length;
        }
    }
    return countActive;
}

closeTodo();
deleteTodo();
loadTodo();



export {
    counterActive
}