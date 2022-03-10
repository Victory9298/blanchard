function resetCheckbox(disabledLabel, closeLabel) {
  closBtn.forEach(() => {
    document.querySelector(`[data-active='${disabledLabel}']`).classList.remove('checkbox-selected');
    document.querySelector(`[data-open='${closeLabel}']`).classList.remove('checkbox-selected');

    labelCheck.forEach(() => {
      document.querySelector(`[data-checked='${disabledLabel}']`).checked = false;
      document.querySelector(`[data-checked='${disabledLabel}']`).disabled = false;
    });
  });
}

function checkCheckbox(disabledLabel, closeLabel) {
  closBtn.forEach(() => {
    document.querySelector(`[data-active='${disabledLabel}']`).classList.add('checkbox-selected');
    document.querySelector(`[data-open='${closeLabel}']`).classList.add('checkbox-selected');

    labelCheck.forEach(() => {
      document.querySelector(`[data-checked='${disabledLabel}']`).checked = true;
      document.querySelector(`[data-checked='${disabledLabel}']`).disabled = true;
    });
  });
}

$(document).ready(function () {
  $('.mobile-category-btn').click(function () {
    $('.checkbox-content__inner').toggleClass('checkbox-content__inner--active');
    $('.mobile-category-btn').toggleClass('mobile-category-btn--active');
    $('.checkbox-content__item').removeClass('checkbox-unselected');
  });
});

$('.checkbox').click(function(){return false});

const labelCheck = document.querySelectorAll('.checkbox');
const checkInner = document.querySelectorAll('.checkbox-content__inner');
const filterTitle = document.querySelector('.mobile-category-btn');
const closBtn = document.querySelectorAll('.checkbox-content__btn');

checkInner.forEach((element) => {
  element.addEventListener('click', (e) => {
    const label = e.currentTarget.dataset.path;
    const checkNumber = label.replace('checkbox-', '');
    const disabledLabel = `active-${checkNumber}`;
    const closeLabel = `close-${checkNumber}`;

    let element = document.querySelector(`[data-path='${label}']`);

    if (element.classList.contains('checkbox-selected')) {
      resetCheckbox(disabledLabel, closeLabel);
    }
    else {
      document.querySelector(`[data-path='${label}']`).classList.add('checkbox-selected');
      checkCheckbox(disabledLabel, closeLabel);
    }
  });
});

closBtn.forEach((e) => {
  e.addEventListener('click', (e) => {

    const disabledLabel = e.currentTarget.dataset.active;
    const closeLabel = e.currentTarget.dataset.close;

    resetCheckbox(disabledLabel, closeLabel);
  });
});

labelCheck.forEach((element) => {
  element.addEventListener('click', (e) => {
    const checkedInput = e.currentTarget.dataset.checked;
    const checkNumber = checkedInput.replace('active-', '');
    const disabledLabel = `active-${checkNumber}`;
    const closeLabel = `close-${checkNumber}`;

    if (document.querySelector(`[data-checked='${checkedInput}']`).checked ) {
      resetCheck(disabledLabel, closeLabel);
    }
    else {
      document.querySelector(`[data-active='${checkedInput}']`).classList.add('checkbox-selected');
      checkCheckbox(disabledLabel, closeLabel);
    }
  })
})
