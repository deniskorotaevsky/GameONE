let header__burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.container_btm');
let back = document.querySelector('body');
let header__list = document.querySelector('.intro_select');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}