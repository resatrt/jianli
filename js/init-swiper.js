!function () {
    var view = window.View('.works')
    var controller = {
        view: null,
        Swiper: null,
        SwiperOptions: {

            loop: true,  //是否无缝循环 
            pagination: {  //页码
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.Swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.SwiperOptions
            )
        }
    }
    controller.init(view)
}.call()
