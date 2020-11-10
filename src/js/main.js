import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
import Axios from "axios";

const initSwiperBanner = () => {
    const swiperBanner = new Swiper(".banner-wrapper .swiper-container", {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
        },
    });
}
const initSwiperNews = () => {
        const swiperNews = new Swiper(".header-new--list .swiper-container", {
            speed: 1000,
            slidesPerView: 3,
            autoplay: {
                delay: 2000,
            },
        });
    }
    // const initSwiperTaget = () => {
    //     const swiperTaget = new Swiper(".target__wrapper .swiper-container", {
    //         speed: 1000,
    //         pagination: {
    //             el: '.target__wrapper .swiper-pagination',
    //             type: 'bullets',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '#next',
    //             prevEl: '#prev',
    //         },
    //         breakpoints: {
    //             640: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 24
    //             },
    //             1025: {
    //                 slidesPerView: 4,
    //                 spaceBetween: 24
    //             }
    //         }
    //     });
    // }
    // const initSwiperInvestment = () => {
    //     const swiperInvestment = new Swiper(".content__desc .swiper-container", {
    //         speed: 1000,
    //         spaceBetween: 24,
    //         slidesPerView: 4,
    //         breakpoints: {
    //             640: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 24
    //             },
    //             1025: {
    //                 slidesPerView: 4,
    //                 spaceBetween: 24
    //             }
    //         }
    //     })
    // }
    // const initSwiperProducer = () => {
    //     const swiperProducer = new Swiper(".producer__wrapper .swiper-container", {
    //         speed: 1000,
    //         spaceBetween: 24,
    //         slidesPerView: 7,
    //         slidesPerGroup: 1,
    //         navigation: {
    //             nextEl: '.producer__wrapper .swiper-button-next',
    //             prevEl: '.producer__wrapper .swiper-button-prev',
    //         },
    //     });
    // }
const menu = () => {
    const menu = document.querySelector("#menuRes");
    const bot = document.querySelector(".header-bottom");
    const top = document.querySelector(".header-top");
    const social = document.querySelector('.header-social');
    if (menu && bot && top && social) {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(1);
            bot.classList.toggle("active");
            top.classList.toggle("active");
            social.classList.toggle("active");
        });
    }
}
const scroll = () => {
    window.onscroll = function() {
        scrollFunction();
    };
    const button = document.querySelector("#go-top");
    const headermenu = document.querySelector("#header-sroll");


    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            button.style.display = "block";
            headermenu.classList.add("active");
        } else {
            button.style.display = "none";
            headermenu.classList.remove("active");
        }
    }

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getSVGs();
    Loading();
    menu();
    // initSwiperProject();
    // initSwiperTaget();
    // initSwiperInvestment();
    // initSwiperProducer();
    scroll();
    initSwiperBanner();
    initSwiperNews();
    // banner();
});