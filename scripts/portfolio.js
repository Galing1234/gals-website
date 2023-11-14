import { resizeWindow } from "./resize.js" ;
import { renderMain } from "./main.js" ;

function renderHTML() {
  renderMain() ;
  resizeWindow() ;

  window.addEventListener('resize', resizeWindow) ;
}

renderHTML() ;