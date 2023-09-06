
// инициализируем свайпер
// new Swiper('.image-slider', {
  // кнопки навигации
  // navigation: {
    // nextEl: '.swiper-button-next', //єти классьі можно заменить своими
    // prevEl: '.swiper-button-prev' 
  // },

  // pagination: {
    // todo -=- Bullets
    // el: '.swiper-pagination',
    // clickable: true, // можно кликать по буллетам
    // dynamicBullets: true, // active bullet changes its size
    // bullets shows index of element циферка на булете
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    //todo -=- Fraction 
    // type: 'fraction',
    //   renderFraction: function(currentClass, totalClass) {
    //     return 'Image <span class="' + currentClass + '"></span>' + ' / ' + '<span class="' +
    //     totalClass + '"></span';
    //   },
    //todo -=- Progressbar
    // type: 'progressbar'
  // },
  // todo -=- Scroll
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true, // можно перетягивать
  // },

  //todo -=- Turn ON / OFF
  // simulateTouch: true, //Перетаскивание на ПК
  // touchRatio: 1, // чувствитеьлность свайпа
  // touchAngle: 45, // угол перетаскивания
  // grabCursor: true, // захват мищью
  // slideToClickedSlide: true,
  //todo -=- Навигация по хешу
  // hashNavigation: {
  //   watchState: true, // листать стрелками браузера
  // },
  //todo -=- Keyboardю Управление клавиатурой
  // keyboard: {
  //    enabled: true, // ON||OFF
  //    onlyInViewport: true, //ON||OFF в пределах viewport
  //   pageUpDown: true,
  //  }, // переключение клавишами pageUP pageDown
  //todo -=- Mouse
  // mouseWheel: {
  //   sensitivity: 1,
  //   // eventsTarget: '.image-slider'
  // },
  //todo -=- автовьісота подстоит слайдер под разньіе изображения
  // autoHeight: true,

  //todo -=- количество слайдов для показа
  // slidesPerView: 1,

  //todo -=- Отступ между слайдами (рх)
  // spaceBetween: 5,

  //todo -=- количество пролистьіваемьіх слайдов
  // slidesPerGroup: 1,
  
  //todo -=- перв слайд по центру
  // centeredSlides: true,

  //todo -=- номер стартового слайда
  // initialSlide: 0,

  //todo -=- Мультирядность (!! сделать свойство autoheight: false)
  // cвайпер должен иметь указанную вьісоту либо помещен в блок
  // с указанной фиксированной вьісотой
  // также слайд должен иметь указанную вьісоту, меньшую от свайпера
  // slidesPerColumn: 2,
  //todo -=- бесконечная прокрутка
  // loop: true,

  // todo -=- Автопрокрутка
  //   autoplay: {
  //   delay: 1500,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: false,
  // },

  // speed: 500,
  //todo -=- Направление
  // direction: 'vertical',
  // todo ==========================================
  // ?============= E F F E C T S

  // effect: 'slide',

  // effect: 'fade',
  // // доролнение к FADE
  // fadeEffect: {
  //   crossFade: true,
  // },

  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true,
  // },

  // effect: 'cube',
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // effect: 'coverflow',

  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   slideShadows: true,
  // },

  //todo Брейкпоінти, адаптив
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // }
// });
// ==========================================
// ==========================================
const burger = document.querySelector('.header__burger');


const toggleArray = document.
querySelectorAll('.header__menu, .header__burger, .header__list');

const socialTimeout = document.
querySelectorAll('.header__link:nth-child(1), .header__link:nth-child(2), .header__link:nth-child(3)');


const socialTimeout2 = document.
querySelectorAll('.social-header__link:nth-child(1), .social-header__link:nth-child(2), .social-header__link:nth-child(3), .social-header__link:nth-child(4)');



const toToggle = function(el){
el.classList.toggle('active');
}


burger.addEventListener('click', function() {
  for (const element of toggleArray) {
    toToggle(element);
  }
  let delay = 300;

  for(let i = 0; i < socialTimeout.length; i++){
    setTimeout(() => toToggle(socialTimeout[i]), delay);
    delay += 300;
  };

  for(let i = 0; i < socialTimeout2.length; i++){
    
    setTimeout(() => toToggle(socialTimeout2[i]), delay);
    delay += 200;
  };
})
