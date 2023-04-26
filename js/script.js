let doc = document



let swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
      
    },
  });