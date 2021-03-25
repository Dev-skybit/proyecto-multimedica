import '../scss/main.scss'

const appointment = () => {
  const btn = document.querySelector('.nav__options__btn')
  const wrapper = document.querySelector('.wrapper')
  const appointmentContainer = document.querySelector('.appointment')
  const close = document.querySelector('.appointment__form__close')

  btn.addEventListener('click', () => {
    wrapper.classList.add('wrapper--no-scroll')
    appointmentContainer.classList.add('appointment--active')
  })

  close.addEventListener('click', () => {
    wrapper.classList.remove('wrapper--no-scroll')
    appointmentContainer.classList.remove('appointment--active')
  })
}

appointment()