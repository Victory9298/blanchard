// form //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },

    tel: {
      required: true,
      minLength: 10,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length == 10
      }
    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Не менее двух символов!'
    },

    tel: {
      required: 'Недопустимый формат',
      minLength: 'Не менее десяти символов!'
    }
  },
});
// smooth transition //
$(document).ready(function () {
  $('nav a, .hero__link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let headerHeight = $('.header').height();
    let offset = $(href).offset().top - headerHeight;
    $('body,html').animate({
      scrollTop: offset,
    }, 1000);
  });

  $('.to-top').on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, 700);
  });
});

// ibg //
function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

// burger //
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .burger-dropdown').addClass('active');
    $('body').toggleClass('lock');
  });
});

// btn close menu //
$(document).ready(function () {
  $('.close-menu').click(function (event) {
    $('.header-burger, .burger-dropdown').removeClass('active');
    $('body').removeClass('lock');
  });
});

// * select-menu *//
$(document).ready(function () {
  $('.hero').click(function (event) {
    $('.select-menu__item, .select-menu__list').removeClass('selected');
  });
});

// realism //
$(document).ready(function () {
  $('.realism').click(function (event) {
    $('.realism, .list-realism').toggleClass('selected');
  });
});
$(document).ready(function () {
  $('.realism').click(function (event) {
    $('.list-impressionism, .list-post-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
    $('.impressionism, .post-impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// impressionism //
$(document).ready(function () {
  $('.impressionism').click(function (event) {
    $('.impressionism, .list-impressionism').toggleClass('selected');
  });
});
$(document).ready(function () {
  $('.impressionism').click(function (event) {
    $('.list-realism, .list-post-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
    $('.realism, .post-impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// post-impressionism //
$(document).ready(function () {
  $('.post-impressionism').click(function (event) {
    $('.post-impressionism, .list-post-impressionism').toggleClass('selected');
  });
});
$(document).ready(function () {
  $('.post-impressionism').click(function (event) {
    $('.list-realism, .list-impressionism, .list-vanguard, .list-futurism').removeClass('selected');
    $('.realism, .impressionism, .vanguard, .futurism').removeClass('selected');
  });
});

// vanguard //
$(document).ready(function () {
  $('.vanguard').click(function (event) {
    $('.vanguard, .list-vanguard').toggleClass('selected');
  });
});
$(document).ready(function () {
  $('.vanguard').click(function (event) {
    $('.list-realism, .list-impressionism, .list-post-impressionism, .list-futurism').removeClass('selected');
    $('.realism, .impressionism, .post-impressionism, .futurism').removeClass('selected');
  });
});

// futurism //
$(document).ready(function () {
  $('.futurism').click(function (event) {
    $('.futurism, .list-futurism').toggleClass('selected');
  });
});
$(document).ready(function () {
  $('.futurism').click(function (event) {
    $('.list-realism, .list-impressionism, .list-post-impressionism, .list-vanguard').removeClass('selected');
    $('.realism, .impressionism, .post-impressionism, .vanguard').removeClass('selected');
  });
});

/* search */
$(document).ready(function () {
  $('.search__input').click(function (event) {
    $('.header__svg').toggleClass('is-focus');
  });
});

$(document).ready(function () {
  $('.media-search').click(function (event) {
    $('.media-search-content').addClass('media-form-open');
  });
});

$(document).ready(function () {
  $('.media-search').click(function (event) {
    $('.media-search').addClass('media-search-is-open');
  });
});

const searchBtn = document.querySelector('.search__btn').addEventListener('click', () => {
  headerTop.classList.remove('transperant');
})
const headerTop = document.querySelector('.header-top');
const serchX = document.querySelector('.media-search').addEventListener('click', () => {
  headerTop.classList.add('transperant');
})

$(document).ready(function () {
  $('.media-search').click(function (event) {
    $('.header').addClass('search-is-open');
  });
});

$(document).ready(function () {
  $('.search__btn').click(function (event) {
    $('.header').removeClass('search-is-open');
  });
});

$(document).ready(function () {
  $('.media-search').click(function (event) {
    $('.logo, .header-burger').addClass('display-none');
  });
});

$(document).ready(function () {
  $('.media-search').click(function (event) {
    $('.media-search-content').removeClass('display-none');
  });
});

$(document).ready(function () {
  $('.search__btn').click(function (event) {
    $('.logo, .header-burger').removeClass('display-none');
  });
});

$(document).ready(function () {
  $('.search__btn').click(function (event) {
    $('.media-search-content').toggleClass('display-none');
  });
});

$(document).ready(function () {
  $('.search__btn').click(function (event) {
    $('.media-search').removeClass('media-search-is-open');
  });
});

/* slider */
const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
  let swiper = new Swiper(el, {
    loop: true,
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
});

/* slider-hero */
const mySwiper = new Swiper('.hero__slider', {
  loop: true,
  autoplay: {
    dalay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});

/* slider-gallery */
var swiper = new Swiper('.gallery-container', {
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      // spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      // spaceBetween: 15,
      slidesPerColumn: 1,
      slidesPerGroup: 1
    },
    691: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerColumn: 2,
      slidesPerGroup: 2
    },
    // when window width is >= 1340px
    1340: {
      slidesPerView: 3,
      spaceBetween: 48,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      initialSlide: 1,
    },
  },

  pagination: {
    el: '.pag1',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/* tabs-content */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })

  })

})

// france //
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.france-author').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-france-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
})

// germany //
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.germany-author').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-germany-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
})

// italy //
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.italy-author').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-italy-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
})

// russia //
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.russia-author').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-russia-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
})

// belgium //
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.belgium-author').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-belgium-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-link-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-link-active')
    })

  })
})

$(document).ready(function () {
  $('.belgium-1').click(function (event) {
    $('.belgium-2, .belgium-6, .belgium-3, .belgium-4, .belgium-5, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-1').click(function (event) {
    $('.belgium-1').addClass('name-default-1');
  });
  $('.belgium-2').click(function (event) {
    $('.belgium-1, .belgium-3, .belgium-6, .belgium-4, .belgium-5, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-2').click(function (event) {
    $('.belgium-2').addClass('name-default-1');
  });
  $('.belgium-3').click(function (event) {
    $('.belgium-1, .belgium-2, .belgium-6, .belgium-4, .belgium-5, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-3').click(function (event) {
    $('.belgium-3').addClass('name-default-1');
  });
  $('.belgium-4').click(function (event) {
    $('.belgium-1, .belgium-2, .belgium-6, .belgium-3, .belgium-5, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-4').click(function (event) {
    $('.belgium-4').addClass('name-default-1');
  });
  $('.belgium-5').click(function (event) {
    $('.belgium-1, .belgium-2, .belgium-6, .belgium-4, .belgium-3, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-5').click(function (event) {
    $('.belgium-5').addClass('name-default-1');
  });
  $('.belgium-6').click(function (event) {
    $('.belgium-1, .belgium-2, .belgium-5, .belgium-4, .belgium-3, .belgium-12').removeClass('name-default-1');
  });
  $('.belgium-6').click(function (event) {
    $('.belgium-6').addClass('name-default-1');
  });
});
$(document).ready(function () {
  $('.italy-1').click(function (event) {
    $('.italy-2, .italy-6, .italy-3, .italy-4, .italy-5, .italy-12').removeClass('name-default-1');
  });
  $('.italy-1').click(function (event) {
    $('.italy-1').addClass('name-default-1');
  });
  $('.italy-2').click(function (event) {
    $('.italy-1, .italy-3, .italy-6, .italy-4, .italy-5, .italy-12').removeClass('name-default-1');
  });
  $('.italy-2').click(function (event) {
    $('.italy-2').addClass('name-default-1');
  });
  $('.italy-3').click(function (event) {
    $('.italy-1, .italy-2, .italy-6, .italy-4, .italy-5, .italy-12').removeClass('name-default-1');
  });
  $('.italy-3').click(function (event) {
    $('.italy-3').addClass('name-default-1');
  });
  $('.italy-4').click(function (event) {
    $('.italy-1, .italy-2, .italy-6, .italy-3, .italy-5, .italy-12').removeClass('name-default-1');
  });
  $('.italy-4').click(function (event) {
    $('.italy-4').addClass('name-default-1');
  });
  $('.italy-5').click(function (event) {
    $('.italy-1, .italy-2, .italy-6, .italy-4, .italy-3, .italy-12').removeClass('name-default-1');
  });
  $('.italy-5').click(function (event) {
    $('.italy-5').addClass('name-default-1');
  });
  $('.italy-6').click(function (event) {
    $('.italy-1, .italy-2, .italy-5, .italy-4, .italy-3, .italy-12').removeClass('name-default-1');
  });
  $('.italy-6').click(function (event) {
    $('.italy-6').addClass('name-default-1');
  });
});
$(document).ready(function () {
  $('.russia-1').click(function (event) {
    $('.russia-2, .russia-6, .russia-3, .russia-4, .russia-5, .russia-12').removeClass('name-default-1');
  });
  $('.russia-1').click(function (event) {
    $('.russia-1').addClass('name-default-1');
  });
  $('.russia-2').click(function (event) {
    $('.russia-1, .russia-3, .russia-6, .russia-4, .russia-5, .russia-12').removeClass('name-default-1');
  });
  $('.russia-2').click(function (event) {
    $('.russia-2').addClass('name-default-1');
  });
  $('.russia-3').click(function (event) {
    $('.russia-1, .russia-2, .russia-6, .russia-4, .russia-5, .russia-12').removeClass('name-default-1');
  });
  $('.russia-3').click(function (event) {
    $('.russia-3').addClass('name-default-1');
  });
  $('.russia-4').click(function (event) {
    $('.russia-1, .russia-2, .russia-6, .russia-3, .russia-5, .russia-12').removeClass('name-default-1');
  });
  $('.russia-4').click(function (event) {
    $('.russia-4').addClass('name-default-1');
  });
  $('.russia-5').click(function (event) {
    $('.russia-1, .russia-2, .russia-6, .russia-4, .russia-3, .russia-12').removeClass('name-default-1');
  });
  $('.russia-5').click(function (event) {
    $('.russia-5').addClass('name-default-1');
  });
  $('.russia-6').click(function (event) {
    $('.russia-1, .russia-2, .russia-5, .russia-4, .russia-3, .russia-12').removeClass('name-default-1');
  });
  $('.russia-6').click(function (event) {
    $('.russia-6').addClass('name-default-1');
  });
});
$(document).ready(function () {
  $('.france-1').click(function (event) {
    $('.france-2, .france-6, .france-3, .france-4, .france-5, .france-12').removeClass('name-default-1');
  });
  $('.france-1').click(function (event) {
    $('.france-1').addClass('name-default-1');
  });
  $('.france-2').click(function (event) {
    $('.france-1, .france-3, .france-6, .france-4, .france-5, .france-12').removeClass('name-default-1');
  });
  $('.france-2').click(function (event) {
    $('.france-2').addClass('name-default-1');
  });
  $('.france-3').click(function (event) {
    $('.france-1, .france-2, .france-6, .france-4, .france-5, .france-12').removeClass('name-default-1');
  });
  $('.france-3').click(function (event) {
    $('.france-3').addClass('name-default-1');
  });
  $('.france-4').click(function (event) {
    $('.france-1, .france-2, .france-6, .france-3, .france-5, .france-12').removeClass('name-default-1');
  });
  $('.france-4').click(function (event) {
    $('.france-4').addClass('name-default-1');
  });
  $('.france-5').click(function (event) {
    $('.france-1, .france-2, .france-6, .france-4, .france-3, .france-12').removeClass('name-default-1');
  });
  $('.france-5').click(function (event) {
    $('.france-5').addClass('name-default-1');
  });
  $('.france-6').click(function (event) {
    $('.france-1, .france-2, .france-5, .france-4, .france-3, .france-12').removeClass('name-default-1');
  });
  $('.france-6').click(function (event) {
    $('.france-6').addClass('name-default-1');
  });
});
$(document).ready(function () {
  $('.germany-1').click(function (event) {
    $('.germany-2, .germany-6, .germany-3, .germany-4, .germany-5, .germany-12').removeClass('name-default-1');
  });
  $('.germany-1').click(function (event) {
    $('.germany-1').addClass('name-default-1');
  });
  $('.germany-2').click(function (event) {
    $('.germany-1, .germany-3, .germany-6, .germany-4, .germany-5, .germany-12').removeClass('name-default-1');
  });
  $('.germany-2').click(function (event) {
    $('.germany-2').addClass('name-default-1');
  });
  $('.germany-3').click(function (event) {
    $('.germany-1, .germany-2, .germany-6, .germany-4, .germany-5, .germany-12').removeClass('name-default-1');
  });
  $('.germany-3').click(function (event) {
    $('.germany-3').addClass('name-default-1');
  });
  $('.germany-4').click(function (event) {
    $('.germany-1, .germany-2, .germany-6, .germany-3, .germany-5, .germany-12').removeClass('name-default-1');
  });
  $('.germany-4').click(function (event) {
    $('.germany-4').addClass('name-default-1');
  });
  $('.germany-5').click(function (event) {
    $('.germany-1, .germany-2, .germany-6, .germany-4, .germany-3, .germany-12').removeClass('name-default-1');
  });
  $('.germany-5').click(function (event) {
    $('.germany-5').addClass('name-default-1');
  });
  $('.germany-6').click(function (event) {
    $('.germany-1, .germany-2, .germany-5, .germany-4, .germany-3, .germany-12').removeClass('name-default-1');
  });
  $('.germany-6').click(function (event) {
    $('.germany-6').addClass('name-default-1');
  });
});

/* accordion */
$(function () {
  $("#accordion, #accordion2, #accordion3, #accordion4, #accordion5").accordion({
    collapsible: true,
    heightStyle: "content",
  });
});

$(document).ready(function () {
  $('.catalog-top__switch-btn').click(function (event) {
    $('.catalog-top__switch-btn').removeClass('default');
  });
  $('.catalog-top__switch-btn--1').click(function (event) {
    $('.catalog-top__switch-btn--1').addClass('default');
  });
  $('.catalog-top__switch-btn--1').click(function (event) {
    $('.catalog-top__switch-btn--5, .catalog-top__switch-btn--4, .catalog-top__switch-btn--3, .catalog-top__switch-btn--2').removeClass('default');
  });
  $('.catalog-top__switch-btn--2').click(function (event) {
    $('.catalog-top__switch-btn--2').addClass('default');
  });
  $('.catalog-top__switch-btn--2').click(function (event) {
    $('.catalog-top__switch-btn--5, .catalog-top__switch-btn--4, .catalog-top__switch-btn--3, .catalog-top__switch-btn--1').removeClass('default');
  });
  $('.catalog-top__switch-btn--3').click(function (event) {
    $('.catalog-top__switch-btn--3').addClass('default');
  });
  $('.catalog-top__switch-btn--3').click(function (event) {
    $('.catalog-top__switch-btn--5, .catalog-top__switch-btn--4, .catalog-top__switch-btn--2, .catalog-top__switch-btn--1').removeClass('default');
  });
  $('.catalog-top__switch-btn--4').click(function (event) {
    $('.catalog-top__switch-btn--4').addClass('default');
  });
  $('.catalog-top__switch-btn--4').click(function (event) {
    $('.catalog-top__switch-btn--5, .catalog-top__switch-btn--3, .catalog-top__switch-btn--3, .catalog-top__switch-btn--1').removeClass('default');
  });
  $('.catalog-top__switch-btn--5').click(function (event) {
    $('.catalog-top__switch-btn--5').addClass('default');
  });
  $('.catalog-top__switch-btn--5').click(function (event) {
    $('.catalog-top__switch-btn--2, .catalog-top__switch-btn--4, .catalog-top__switch-btn--3, .catalog-top__switch-btn--1').removeClass('default');
  });
});

/* events */
$(document).ready(function () {
  $('.events__btn').click(function (event) {
    $('.events-content__item').removeClass('event-hidden');
  });
  $('.events__btn').click(function (event) {
    $('.event-hedden-768').addClass('event-hedden-768-active');
  });
  $('.events__btn').click(function (event) {
    $('.events__btn').addClass('event-btn-hidden');
  });
});

/* events-slider */
var swiper = new Swiper('.events-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* slider-editions */
var swiper = new Swiper('.editions-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.pag2',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.next-2',
    prevEl: '.prev-2',
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },
    665: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 45,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    1460: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});

/*projects-slider*/
var swiper = new Swiper('.projects-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.next-3',
    prevEl: '.prev-3',
  },
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 35,
      slidesPerGroup: 1
    },
    740: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },
    // when window width is >= 640px
    1260: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
  },
});
// /* map */
ymaps.ready(init);

// Tooltips
tippy('#btn-t1', {
  content: '<span class="tooltip-text">Пример современных тенденций -</br> современная методология разработки</span>',
  allowHTML: true,
});
tippy('#btn-t2', {
  content: '<span class="tooltip-text">Приятно, граждане, наблюдать, как </br> сделанные на базе аналитики выводы </br> вызывают у вас эмоции</span>',
  allowHTML: true,
});
tippy('#btn-t3', {
  content: '<span class="tooltip-text">В стремлении повысить качество</span>',
  allowHTML: true,
});

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758463, 37.601079],
    zoom: 14
  });
  var myGeoObject = new ymaps.GeoObject();
  var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}

/* select */

const element = document.querySelector('.select');
const choices = new Choices(element, {});

