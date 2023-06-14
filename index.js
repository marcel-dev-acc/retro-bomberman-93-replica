import { setScreenDimensions } from "./components/screen_dimensions/screen_dimensions.js"

window.addEventListener('load', () => {
  setScreenDimensions()

  // Set the splash image
  const splashImage = document.getElementById('splash-image')
  splashImage.src = './index_assets/images/splash_horizontal.jpg'

})