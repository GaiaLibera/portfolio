
// MENU ANIMATION
const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
  toggle.classList.toggle('is-active')
  menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () =>{
  toggle.addEventListener('click', toggleMenu)
})


// SLIDESHOW in JS
document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function slideshow(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideshow(currentSlide);
  }
  setInterval(nextSlide, 4000);
});