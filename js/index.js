let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// let swiper1 = new Swiper(".mySwiper1", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     }
// });

const button = document.querySelector('.logotip__more_button');
const logotip__button = document.querySelector('.hidden');
const arrow__button = document.querySelector('.logotip__expand');
const arrow__buttonn = document.querySelector('.logotip__expand_active');
button.addEventListener('click', (e)=> {
    logotip__button.classList.toggle('button__more');
    arrow__button.classList.toggle('see');
    arrow__buttonn.classList.toggle('seee');
    if (button.innerText === "Показать всё") {
        arrow__button.style.display = 'none';
        button.innerText = "Скрыть";
    } else {
        button.innerText = "Показать всё";
        arrow__button.style.display = 'block';
    }
});


// let swiper2 = new Swiper(".mySwiper2", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     }
// });