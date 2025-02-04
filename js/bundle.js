document.querySelector('.popup-menu-btn').onclick = function () {
  const mainMenu = document.querySelector('.popup-menu');
  const menuButton = document.querySelector('.popup-menu-btn');
  const isMenuOpen = mainMenu.classList.toggle('show');
  menuButton.classList.toggle('active');

  // Проверяем размер экрана
  if (window.matchMedia('(max-width: 600px)').matches) {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  document.addEventListener('click', closeMenuOnClickOutside);

  function closeMenuOnClickOutside(event) {
    if (!mainMenu.contains(event.target) && !menuButton.contains(event.target)) {
      mainMenu.classList.remove('show');
      menuButton.classList.remove('active');

      // Сбрасываем overflow только если ширина <= 600px
      if (window.matchMedia('(max-width: 600px)').matches) {
        document.body.style.overflow = '';
      }

      document.removeEventListener('click', closeMenuOnClickOutside);
    }
  }
};

const header = document.querySelector('header');

const toggleScrolledClass = () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', toggleScrolledClass);

toggleScrolledClass();

function checkVisibility() {
  const blocks = document.querySelectorAll('.animate-block');

  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible && !block.classList.contains('animated')) {
      const delay = block.dataset.delay || 100;
      setTimeout(() => {
        block.classList.add('animated');
      }, delay);
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

var swiper = new Swiper(".swiper-slider-thumbs", {
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper1 = new Swiper(".swiper-slider-thumbs-main", {
  loop: true,
  spaceBetween: 0,
  autoHeight: true,
  thumbs: {
    swiper: swiper,
  },
});

var swiper2 = new Swiper(".benefits-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 24,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".benefits .swiper-button-next",
    prevEl: ".benefits .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  }
});

var swiper3 = new Swiper(".advantages-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 24,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".advantages-slider .swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});