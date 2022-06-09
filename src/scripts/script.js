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

 const slider = new Swiper('.slider', {

   slidesPerView: 2,
   spaceBetween: 20,

   // If we need pagination
   pagination: {
      clickable: true,
      el: '.slider-pagination',
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

