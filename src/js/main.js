import { getSVGs, Loading } from "./utilities/util";
import Fullpage from "./libraries/Fullpage";
import Axios from "axios";

const initSwiperBanner = () => {
    const swiperBanner = new Swiper(".banner-wrapper .swiper-container", {
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
    });
};
const initSwiperNews = () => {
    const swiperNews = new Swiper(".swiper__wrapper .swiper-container", {
        speed: 1000,
        spaceBetween: 24,
        pagination: {
            el: '.swiper__wrapper .swiper-pagination-1',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            438: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 2.5,
            },
        },
    });
};
const initSwiperHeaderNews = () => {
    const swiperHeaderNews = new Swiper(".header-news .swiper-container", {
        speed: 1000,
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.header-news .swiper-pagination-1',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
};
const initSwiperInvesmemnt = () => {
    const swiperInvesmemnt = new Swiper(".invesment-wrapper .swiper-container", {
        speed: 1000,
        pagination: {
            el: ".invesment-wrapper .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".invesment-wrapper .swiper-button-next",
            prevEl: ".invesment-wrapper .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            438: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });
};
const initSwiperProject = () => {
    const swiperProject = new Swiper(".project-list .swiper-container", {
        loop: true,
        speed: 1000,
        pagination: {
            el: ".project-list .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".project-list .swiper-button-next",
            prevEl: ".project-list .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            538: {
                slidesPerView: 2,
                paginationClickable: false,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
                paginationClickable: true,
                centeredSlides: true,
            },
        },
    });
};

const initSwiperProducer = () => {
    const swiperProducer = new Swiper(".producer-wrapper .swiper-container", {
        speed: 1000,
        navigation: {
            nextEl: ".producer-wrapper .swiper-button-next",
            prevEl: ".producer-wrapper .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 7,
            },
        },
    });
};
const initSwiperTaget = () => {
    const swiperTaget = new Swiper(".target__wrapper .swiper-container", {
        speed: 1000,
        pagination: {
            el: '.target__wrapper .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '#next',
            prevEl: '#prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            1359: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    });
}
const menu = () => {
    const menu = document.querySelector("#menuRes");
    const bot = document.querySelector(".header-bottom");
    const top = document.querySelector(".header-top");
    const social = document.querySelector(".header-social");
    if (menu && bot && top && social) {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(1);
            bot.classList.toggle("active");
            top.classList.toggle("active");
            social.classList.toggle("active");
        });
    }
};
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
    initSwiperBanner();
    initSwiperNews();
    initSwiperTaget();
    initSwiperProject();
    initSwiperProducer();
    initSwiperInvesmemnt();
    scroll();
    initSwiperHeaderNews();
});