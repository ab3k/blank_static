/**
 * Check if the browser can be considered "modern".
 */
export const isModern = () => {
  return 'fetch' in window && 'sendBeacon' in navigator && 'assign' in Object
}
