export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });

    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');
        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                loop: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                autoplay: {
                    delay: 4000,
                },

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },

            });
        } catch (err) {
            console.log(err);
        }
    })

    document.querySelectorAll('.swiper-class-home').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');
        try {
            new Swiper(slider, {
                speed: 1200,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                spaceBetween: 30,

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },

            

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                        loop:true,
                    },

                    700: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        loop:true,
                    },

                    768: {
                        spaceBetween: 15,
                        slidesPerView: 2,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },

                        loop: false,
                    },
                    1024: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },

                        loop: false,
                        
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },

                        loop: false,
                      
                    }
                }

            });
        } catch (err) {
            console.log(err);
        }
    })

    if (document.querySelector('.swiper-demo')) {
        const swiper = document.querySelector('.swiper-demo');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}