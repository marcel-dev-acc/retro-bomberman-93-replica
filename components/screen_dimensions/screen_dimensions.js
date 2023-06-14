import { screen } from "../../constants/screen.js"

export const setScreenDimensions = () => {
  const root = document.getElementById('root')

  const isVerticalScreen = window.innerWidth < window.innerHeight
  if (isVerticalScreen) {
    root.style.width = `${screen.vertical.maxWidth}px`
    root.style.height = `${screen.vertical.maxHeight}px`
  } else {
    root.style.width = `${screen.horizontal.maxWidth}px`
    root.style.height = `${screen.horizontal.maxHeight}px`
  }
  
  listenerScreenOrientation()
}

export const listenerScreenOrientation = () => {
  window.addEventListener('resize', () => {
    const isVerticalScreen = window.innerWidth < window.innerHeight
    if (isVerticalScreen) {
      root.style.width = `${screen.vertical.maxWidth}px`
      root.style.height = `${screen.vertical.maxHeight}px`
    } else {
      root.style.width = `${screen.horizontal.maxWidth}px`
      root.style.height = `${screen.horizontal.maxHeight}px`
    }
  })
}