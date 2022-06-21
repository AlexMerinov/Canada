const popularSlider = new Swiper('.popular-slider', {

   slidesPerView: 2,
   spaceBetween: 20,

   // If we need pagination
   pagination: {
      clickable: true,
      el: '.popular-slider-pagination',
   },

   breakpoints: {
      576: {
         slidesPerView: 3,
      },

      1280: {
         slidesPerView: 4,
         spaceBetween: 30
      },
   },
 
});



// function init all sliders
 
const sliders = document.querySelectorAll('.slider__wrapper .slider');


if (sliders) {
   sliders.forEach(function (slider) {
      const navigation = {
         pagination: slider.closest('.slider__wrapper').querySelector('.slider-pagination')
      }

      new Swiper(slider, {

         slidesPerView: 2,
         spaceBetween: 20,
      
         // If we need pagination
         pagination: {
            clickable: true,
            el: navigation.pagination,
         },
      
         breakpoints: {
            576: {
               slidesPerView: 3,
            },
      
            1280: {
               slidesPerView: 4,
               spaceBetween: 30
            },
         },
       
      });      

   });
}

// search Header

const searchClose   = document.querySelector('.search__close');
const searchWrapper = document.querySelector('.search__wrapper');

if (searchClose) {
   searchClose.addEventListener('click', () => {
      searchClose.classList.toggle('search__close--active');
      searchWrapper.classList.toggle('search__wrapper--active');
   });
}





