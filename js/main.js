$(document).ready(function () {
    //Плавный переход к блоку при клике по ссылке
    $('a[href^="#"]').on('click', function (e) {
              e.preventDefault();
              $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
      });
    //Слайдер для карточек с турами
    $('.tour-cards').slick({
      arrows:false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 661,
            settings: {
              slidesToShow: 1,
          }
        }
      ]
    });
    //Слайдер для карточек с отзывами
    $('.reviews-cards').slick({
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1151,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          }
      ]
    });
    //слайдер для карточек со странами
    $('.countries-cards').slick({
      arrows:false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      rows: 2,
      sliderPerRow: 2,
      responsive: [
        {
          breakpoint: 661,
            settings: {
              slidesToShow: 1,
              rows: 1,
              sliderPerRow: 1,
          }
        }
      ]
    });
    //Меню
    var burgerButton = $('.burger');
    $(burgerButton).on('click',openMenu);

    function openMenu() {
      //Открытие меню
    }
}); 