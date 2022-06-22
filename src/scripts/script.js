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
const search = document.querySelector('.search');

if (searchClose) {
   searchClose.addEventListener('click', () => {
      searchClose.classList.toggle('search__close--active');
      search.classList.toggle('search--active');
   });
}

//burger menu

const burgerBtn   = document.querySelector('.burger-btn');
const navMenu     = document.querySelector('.nav-menu');
const body        = document.querySelector('body');

if (burgerBtn) {
   burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('burger-btn--active');
      navMenu.classList.toggle('nav-menu--active');
      body.classList.toggle('lock');
   });
}

//burger menu

const userBtn   = document.querySelector('.user-btn');

if (userBtn) {
   userBtn.addEventListener('click', () => {
      userBtn.classList.toggle('user-btn--active');
      body.classList.toggle('lock');
   });
}

// accordio for dropDown menu

if (document.body.clientWidth < 1280) {
   const dropDownItems = Array.from(document.querySelectorAll('.drop-down__item'));

   dropDownItems.forEach((dropDownItem) => {
      dropDownItem.addEventListener('click', dropDownOpen);
   });

   function dropDownOpen(e) {
      e.preventDefault();
      let currentDropDown = e.target.closest('.drop-down__item');
      let currentDropList = e.target.nextElementSibling;
      currentDropDown.classList.toggle('drop-down__item--visible');
      if (currentDropDown.classList.contains('drop-down__item--visible')) {
         currentDropList.style.maxHeight = currentDropList.scrollHeight + "px";
      } else {
         currentDropList.style.maxHeight = 0;
      }
   }
}





