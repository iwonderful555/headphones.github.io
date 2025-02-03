AOS.init({
    delay: 400,
    duration: 1000
});


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
    let menuClick = document.getElementById('menuClick');
    menuClick.onclick = () => {
        navbar.classList.remove('active');
        }
    let menuClick1 = document.getElementById('menuClick1');
    menuClick1.onclick = () => {
        navbar.classList.remove('active');
        }
    let menuClick2 = document.getElementById('menuClick2');
    menuClick2.onclick = () => {
        navbar.classList.remove('active');
        }
    let menuClick3 = document.getElementById('menuClick3');
    menuClick3.onclick = () => {
        navbar.classList.remove('active');
        }
    let menuClick4 = document.getElementById('menuClick4');
    menuClick4.onclick = () => {
        navbar.classList.remove('active');
        }
    let menuClick5 = document.getElementById('menuClick5');
    menuClick5.onclick = () => {
        navbar.classList.remove('active');
        }
}

let modalBtns = document.querySelectorAll('.modal-open');
modalBtns.forEach(function (btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'flex';
    }
});
let closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(function (btn) {
    btn.onclick = function() {
        let modal = btn.closest('.modal').style.display = 'none';
    }
});