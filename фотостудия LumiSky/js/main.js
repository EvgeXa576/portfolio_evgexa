const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
      },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    effect: "cube",

    fadeEffect: {
        crossFade : true
    },
    
  });
  

//  Когда пользователь прокрутит вниз 600px от начала документа, показать кнопку
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("mybtn").style.display = "block";
    } else {
        document.getElementById("mybtn").style.display = "none";
    }
}
// Когда пользователь нажимает на кнопку, происходит прокручивание до верхней части документа (к началу страницы)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


