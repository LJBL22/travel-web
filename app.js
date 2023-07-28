// for responsive nav menu
const burgerBtn = document.querySelector('.burger')
const navigation = document.querySelector('.nav')
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open')
  navigation.classList.toggle('active')
}
)

// for video slider nav
const btns = document.querySelectorAll('.slider-nav-btn')
const slides = document.querySelectorAll('.video-slide')
const contents = document.querySelectorAll('.content')
// 自己參考 JS30 小挑戰寫的方法=> 比較慢 多了 0.4 ms
// let currentSlide = btns[0]
// let toggleOpen = function (manual) {
//   if (currentSlide === this) {
//     return
//   } else {
//     currentSlide.classList.remove('active')
//   }
//   btns[manual].classList.add('active')
//   currentSlide = btns[manual];
// }
let toggleOpen = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove('active')
  })
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
  contents.forEach((content) => {
    content.classList.remove('active')
  })
  btns[manual].classList.add('active')
  slides[manual].classList.add('active')
  contents[manual].classList.add('active')
}

btns.forEach((btn, i) => btn.addEventListener('click', () => {
  // console.time('toggleOpen');
  toggleOpen(i);
  // console.timeEnd('toggleOpen');
}))
