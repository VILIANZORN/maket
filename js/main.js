
window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

breakpoint = window.matchMedia(breakpoint)

const enableSwiper = function (className, settings) {
  swiper = new Swiper(className, settings)
}

const checker = function () {
  if (breakpoint.matches) {
    return enableSwiper(swiperClass, swiperSettings)
  } else {
    if (swiper !== undefined) swiper.destroy(true, true)
    return
  }
}

breakpoint.addEventListener('change', checker)
checker()
  }

  resizableSwiper('(max-width: 767.5px)', '.image-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  mousewheel: {
      sensitivity: 1,
      eventsTarget:".image-slider"
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  autoHeight: true,
  })
})

const btn = document.querySelector(".show-button");
const cards = document.querySelector(".image-slider__wrapper")
const showBtn = document.querySelector('.show-button::before')

btn.addEventListener('click',function(){
  if (btn.innerHTML === "Показать всё") {
    btn.innerHTML = "Скрыть";
    cards.style.height = "auto";
    } else {
    btn.innerHTML = "Показать всё";
    cards.style.height = "160px";
    }
})



