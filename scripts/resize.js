import { openMenu } from "./header.js" ;

export function resizeWindow() {
  if (window.innerWidth < 700) {
    document.getElementById('header-right-section').innerHTML = `
      <i class="bi bi-list" id="svg-menu" style="font-size: 64px ;"></i>
    ` ;

    const menu = document.getElementById('svg-menu') ;
  
    if (menu) {
      menu.addEventListener('click', () => {
        openMenu() ;
      }) ;
    }
  } else {
    document.getElementById('header-right-section').innerHTML = `
      <article>
        <a href="#about-me-section">ABOUT ME</a>
      </article>
  
      <article>
        <a href="#my-projects-section">MY PROJECTS</a>
      </article>

      <article>
        <a href="#blog-section">BLOG</a>
      </article>
  
      <article>
        <a href="#contact-section">CONTACT</a>
      </article>
    ` ;
  }
}