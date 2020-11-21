const toogleBtn = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const priceSort = document.querySelector('.container__price');
const menuSort = document.querySelector('.container__menu');
const placeSort = document.querySelector('.container__place');

const price = document.querySelector('#price');
const block = document.querySelector('#menu');
const place = document.querySelector('#place');
const random = document.querySelector('#random');

var menuArray = new Array();
menuArray[0] = "중식";
menuArray[1] = "양식";
menuArray[2] = "일식";
menuArray[3] = "아시안";
menuArray[4] = "분식";
menuArray[6] = "한식";
menuArray[8] = "패스트푸드";
menuArray[9] = "카페";

toogleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

price.addEventListener('click', function () {
    priceSort.classList.add('active');
    menuSort.classList.remove('active');
    placeSort.classList.remove('active');
});

block.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.add('active');
    placeSort.classList.remove('active');
});

place.addEventListener('click', function () {
    priceSort.classList.remove('active');
    menuSort.classList.remove('active');
    placeSort.classList.add('active');
});

random.addEventListener('click', function () {
    let imgNum = Math.round(Math.random() * 9);
    let selected = menuArray[imgNum];
    alert("오늘은 " + selected + " 어떠신가요?");
});

