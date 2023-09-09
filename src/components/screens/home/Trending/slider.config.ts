import { Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperProps } from "swiper/react";

export const sliderProps: SwiperProps = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 1500,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    slideToClickedSlide: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 50,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Autoplay],
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
};
