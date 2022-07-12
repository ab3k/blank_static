import { isModern, toggleVerticalRhythm } from './utils.js'
import { initMainMenu } from './menu.js'

if (isModern()) {
  const rootElement = document.documentElement
  rootElement.classList.add('modern')
}

initMainMenu()

window.Theme = {
  isModern,
  toggleVerticalRhythm
}
