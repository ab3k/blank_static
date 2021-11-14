const rootElement = document.documentElement

export const initMainMenu = (toggleSelector = '#main-menu-toggle ~ nav') => {
  let resizing = false
  let resizingTimeout
  const toggleElement = document.querySelector(toggleSelector)
  const _updateMainMenuMaxHeight = () => {
    rootElement.style.setProperty('--main-menu-max-height', toggleElement.scrollHeight + 'px')
    resizing = false
  }

  window.addEventListener('resize', function () {
    if (!resizing) {
      rootElement.style.setProperty('--main-menu-max-height', '100vh')
      resizing = true
    }
    clearTimeout(resizingTimeout)
    resizingTimeout = setTimeout(_updateMainMenuMaxHeight, 250)
  })

  // Call immediatiatly to initialize the correct height
  _updateMainMenuMaxHeight()
}
