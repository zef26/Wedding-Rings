let doc = document

const anchors = doc.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
anchor.addEventListener('click', function(event){
event.preventDefault()
const  blockID = anchor.getAttribute('href')
document.querySelector('' + blockID).scrollIntoView({
    behavior:'smooth',
    block: 'center'
})
})
}


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