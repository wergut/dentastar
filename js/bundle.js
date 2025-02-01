document.querySelector('.popup-menu-btn').onclick = function () {
  const mainMenu = document.querySelector('.popup-menu');
  const menuButton = document.querySelector('.popup-menu-btn');
  mainMenu.classList.toggle('show');
  menuButton.classList.toggle('active');
  document.addEventListener('click', closeMenuOnClickOutside);
  function closeMenuOnClickOutside(event) {
    if (!mainMenu.contains(event.target) && !menuButton.contains(event.target)) {
      mainMenu.classList.remove('show');
      menuButton.classList.remove('active');
      document.body.style.overflow = '';
      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
};
var swiper = new Swiper(".swiper-slider-thumbs", {
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".swiper-slider-thumbs-main", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper
  }
});