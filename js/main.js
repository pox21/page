
const listBrg = document.querySelector('.header-box__brg');
const brg = document.querySelector('.header-box__brg-item');
const menu = document.querySelector('.header-box__menu');
    listBrg.addEventListener('click', function () {
        brg.classList.toggle('header-box__brg-item-active');
        menu.classList.toggle('header-box__menu-active');
    });

const html = document.querySelector('html');
const popupCall = document.querySelector('.popup-call');
const popupBuy = document.querySelector('.popup-buy');
const item = document.querySelector('body');

    item.addEventListener('click', function(e) {
        let target = e.target;
        if (target.classList.contains('call')) {
            html.classList.add('body__scroll');
            popupCall.classList.add('popup-call-active');
        };
        if (target.classList.contains('buy')) {
            html.classList.add('body__scroll');
            popupBuy.classList.add('popup-buy-active');
        };
    });
    item.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('popup__close')) {
            html.classList.remove('body__scroll');
            popupCall.classList.remove('popup-call-active');
            popupBuy.classList.remove('popup-buy-active');
        };
    });

let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        610: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1030: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
    },

});


$(document).ready(function(){

    $('.element').removeClass('anim');

    $('nav a, #btn').on('click', function (event){
        event.preventDefault();

            let href = $(this).attr('href');

            let offset = $(href).offset().top;

            $('body,html').animate({
                scrollTop: offset,
            }, 700)

    });
});


$(window).on('scroll', function () {
    let scrl = $(window).scrollTop();

    if (scrl > 200) {
        $('.element').addClass('anim');
    }  else {
        $('.element').removeClass('anim');
    };
    if (scrl > 1050) {
        $('.aside-element').removeClass('aside-anim');
    } else {
        $('.aside-element').addClass('aside-anim');
    }

});


$(document).ready(function () {

    $('select').styler();

    $('form').each(function () {
        $(this).validate({
            errorPlacement(error, element) {
                return true;
            },
            focusInvalid: false,
            rules: {
                Телефон: {
                    required: true,
                },
                Имя: {
                    required: true,
                },
                mail: {
                    required: true,
                }
            },
            submitHandler(form) {
                let th = $(form);

                $.ajax({
                    type: 'POST',
                    url: 'mail.php',
                    data: th.serialize(),
                    // eslint-disable-next-line func-names
                }).done(() => {

                    th.trigger('reset');
                });

                return false;
            }
        });
    });
});
