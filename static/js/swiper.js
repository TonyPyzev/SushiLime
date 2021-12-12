var cardsCount;
screen.width <=414 ? cardsCount = 2.4 :cardsCount = 4.55;

var columnGup;
screen.width <=414 ? columnGup = 10 :columnGup = 30;

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false
    },
    navigation: {
      nextEl: ".slider-swiper-button-next",
      prevEl: ".slider-swiper-button-prev"
    }
});

var swiper = new Swiper(".courusel-sale", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: columnGup,
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: ".sale-swiper-button-next",
        prevEl: ".sale-swiper-button-prev"
      }
});

var swiper = new Swiper(".courusel-sets", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: columnGup,
  grabCursor: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
      nextEl: ".sets-swiper-button-next",
      prevEl: ".sets-swiper-button-prev"
    }
});

var swiper = new Swiper(".courusel-rolls", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: columnGup,
  grabCursor: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
      nextEl: ".rolls-swiper-button-next",
      prevEl: ".rolls-swiper-button-prev"
    }
});

var swiper = new Swiper(".courusel-sushi", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: columnGup,
  grabCursor: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
      nextEl: ".courusel-button-next",
      prevEl: ".courusel-button-prev"
    }
});