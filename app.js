const burgerBtn = document.querySelector('.burger')
const navigation = document.querySelector('.nav')
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open')
  navigation.classList.toggle('active')
}
)