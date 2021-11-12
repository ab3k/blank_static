import { isModern } from './utils.js'

if (isModern()) {
  const rootElement = document.documentElement
  rootElement.classList.add('modern')
}

window.Theme = {
  isModern: isModern
}
