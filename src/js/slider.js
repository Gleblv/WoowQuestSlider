const ourProductionSlider = new Swiper('.our-production__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 25,
    initialSlide: 2,
    speed: 600,

    pagination: {
        el: '.our-production__swiper-pagination',
    },

    navigation: {
        nextEl: '.our-production__swiper-prev',
        prevEl: '.our-production__swiper-next',
    },
})