import { welcomeScreen } from "./screens/welcome/welcome.js"

window.addEventListener('load', () => {
  const root = document.getElementById('root')
  const head = document.getElementsByTagName('head')[0]

  // Load in the various screen
  welcomeScreen(root, head)
})