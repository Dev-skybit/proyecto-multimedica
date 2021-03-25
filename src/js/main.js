import '../scss/main.scss'

const appointment = () => {
  const btn = document.querySelector('.nav__options__btn')
  const wrapper = document.querySelector('.wrapper')
  const appointmentContainer = document.querySelector('.appointment')

  btn.addEventListener('click', () => {
    wrapper.classList.add('wrapper--no-scroll')
    appointmentContainer.classList.add('appointment--active')
  })
}

appointment()