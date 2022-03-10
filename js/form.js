
// form //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      customRegexp: '/^[a-zA-Z_ ]*$/',
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
      minLength: 'Не менее двух символов!',
      customRegexp: 'Недопустимый формат!'
    },

    tel: {
      required: 'Недопустимый формат',
      minLength: 'Не менее десяти символов!'
    }
  },
});
