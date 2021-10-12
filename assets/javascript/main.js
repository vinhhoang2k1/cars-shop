let navbarMNLink = document.querySelectorAll('.navbar-link');
let menuBtn = document.querySelector('.menu-mb-btn');
let navBar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}
// login user
document.querySelector('.login-form');
document.getElementById('login').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form').classList.remove('active');
}


Array.from(navbarMNLink).forEach((item) => {
    item.onclick = () => {
        let curreMenu = document.querySelector('.navbar-link.active');
        curreMenu.classList.remove('active');
        item.classList.add('active');
    };
})



