let isMenuClicked = false ;

export function openMenu() {
  const extendedMenu = document.getElementById('extended-menu') ;
  const svgMenu = document.getElementById('svg-menu') ;
  
  svgMenu.style.fontSize = '64px' ;

  if (!isMenuClicked) {
    extendedMenu.style.animation = 'openMenu 0.5s' ;
    
    setTimeout(() => {
      extendedMenu.style.top = '90px' ;
      extendedMenu.style.animation = ' ' ;
    }, 500) ;

    isMenuClicked = true ;
  } else {
    extendedMenu.style.animation = 'closeMenu 0.5s' ;

    setTimeout(() => {
      extendedMenu.style.top = '-100%' ;
      extendedMenu.style.animation = ' ' ;
    }, 500) ;

    isMenuClicked = false ;
  }
}
