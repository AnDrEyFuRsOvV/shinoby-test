const scrollToTop = document.querySelector(".arrow-top");

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    const isOpen = nav.classList.contains("active");
    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");

});

const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    speed: 500,
    // spaceBetween: 60,
    grabCursor: true,

    coverflowEffect: {
        rotate: 0,
        stretch: "-20%",
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },

    breakpoints: {

        1200: {
            // slidesPerView: 2,
            slidesPerView: 2,
            coverflowEffect: {
                rotate: 0,
                stretch: "-20%",
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
        },
        920: {
            // slidesPerView: 2,
            // spaceBetween: 30,
            slidesPerView: 1.4,
            coverflowEffect: {
                rotate: 0,
                stretch: "-20%",
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
        },
        0: {
            slidesPerView: 1.4,
            coverflowEffect: {
                rotate: 0,
                stretch: "-20%",
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
        },
    },
});