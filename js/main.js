$(document).ready(function(){

    jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});







    $('.work_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              dots: true,
              slidesToScroll: 1
            }
          }
      ]
  });


    $('.new_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });


    $('.carts').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay:false,
  arrows:false,
  dots: false,
  asNavFor: '.iss'
});

$('.iss').slick({
  slidesToShow:6,
  infinite: true,
  slidesToScroll: 1,
  asNavFor: '.carts',
  active:true,
  autoplay:false,
  dots: false,
  arrows:false,
  centerPadding: '5px',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1260,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 5,
      arrows:false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 5,
      dots:false,
      arrows:false,
      slidesToScroll: 1
    }
  },

  {
      breakpoint: 565,
      settings: {
        slidesToShow: 5,
        dots:false,
        arrows:false,
        slidesToScroll: 1
      }
    }
]
});


});



let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});




 const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider2 .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});