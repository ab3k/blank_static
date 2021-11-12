/**
 * Check if the browser can be considered "modern".
 */
export const isModern = () => {
  return 'fetch' in window && 'sendBeacon' in navigator && 'assign' in Object
}

/**
 * Toggle the .debug-vr class for debugging the vertical rhythm.
 */
export const toggleVerticalRhythm = () => {
  const rootElement = document.documentElement
  rootElement.classList.toggle('debug-vr')
}
