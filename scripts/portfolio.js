import { resizeWindow } from "./resize.js" ;
import { renderMain } from "./main.js" ;
import { openMenu } from "./header.js" ;

function renderHTML() {
  renderMain() ;
  resizeWindow() ;

  const menu = document.getElementById('svg-menu') ;
  
  if (menu) {
    menu.addEventListener('click', () => {
      openMenu() ;
      renderHTML() ;
    }) ;
  }

  window.addEventListener('resize', resizeWindow) ;
}

renderHTML() ;