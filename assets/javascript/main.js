let navbarMNLink = document.querySelectorAll('.navbar-link');
let menuBtn = document.querySelector('.menu-mb-btn');
let navBar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}


window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
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

document.querySelector('#home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}

document.querySelector('#home').onmouseleave = () => {

    document.querySelectorAll('.home-parallax').forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,// hinh ban tay
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },
});


