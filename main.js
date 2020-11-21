const toogleBtn = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const price = document.querySelector('#price');
const upvote = document.querySelector('#upvote');
const place = document.querySelector('#place');

let likebtn = document.querySelector('#likebtn');
let input1 = document.querySelector('#input1');

likebtn.addEventListener('click', function () {
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "ff0000";
});

toogleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

price.addEventListener('click', function filter() {

});

upvote.addEventListener('click', function filter() {

});

place.addEventListener('click', function filter() {

});
