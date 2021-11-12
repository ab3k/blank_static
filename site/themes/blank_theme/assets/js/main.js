import { isModern, toggleVerticalRhythm } from './utils.js'

if (isModern()) {
  const rootElement = document.documentElement
  rootElement.classList.add('modern')
}

window.Theme = {
  isModern: isModern,
  toggleVerticalRhythm: toggleVerticalRhythm
}
