if (window.screen.width > 768) {
    const ourProductionSliderDesctop = new Swiper('.our-production__slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 2,
        slidesPerGroup: 1,
        spaceBetween: 25,
        speed: 600,
    
        on: {
            init: function () {
                const slides = this.slides;

                slides.forEach((slide, index) => {
                    if (index === this.activeIndex) {
                        slide.style.width = '34.6rem';
                        slide.style.height = '43.6rem';
                    } else if (Math.abs(index - this.activeIndex) === 1) {
                        slide.style.width = '24.6rem';
                        slide.style.height = '32.8rem';
                    } else {
                        slide.style.width = '23.1rem';
                        slide.style.height = '26.2rem';
                    }
                })
            },

            slideChange: function () {
                const slides = this.slides;
    
                slides.forEach((slide, index) => {
                    if (index === this.activeIndex) {
                        slide.style.width = '34.6rem';
                        slide.style.height = '43.6rem';
                    } else if (Math.abs(index - this.activeIndex) === 1) {
                        slide.style.width = '24.6rem';
                        slide.style.height = '32.8rem';
                    } else {
                        slide.style.width = '23.1rem';
                        slide.style.height = '26.2rem';
                    }
                })
            }
        },
    
        pagination: {
            el: '.our-production__swiper-pagination',
        },
    
        navigation: {
            nextEl: '.our-production__swiper-next',
            prevEl: '.our-production__swiper-prev',
        },
    });
} else {
    const ourProductionSliderMobile = new Swiper('.our-production__slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        initialSlide: 2,
        speed: 600,

        pagination: {
            el: '.our-production__swiper-pagination',
        },
    
        navigation: {
            nextEl: '.our-production__swiper-next',
            prevEl: '.our-production__swiper-prev',
        },
    })
}