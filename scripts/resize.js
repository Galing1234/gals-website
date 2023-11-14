export function resizeWindow() {
  const projectTitles = document.querySelectorAll('.project-title') ;

  projectTitles.forEach(projectTitle => {
    if (projectTitle.scrollHeight > 30) {
      projectTitle.classList.add('ellipsis-applied') ;
    } else {
      projectTitle.classList.remove('ellipsis-applied') ;
    }
  }) ;
  
  if (window.innerWidth < 700) {
    const extendedMenu = document.getElementById('extended-menu') ;

    document.getElementById('header-right-section').innerHTML = `
      <i class="bi bi-list" id="svg-menu" style="font-size: 64px ;"></i>
    ` ;

    extendedMenu.style.top = '-100%' ;
    extendedMenu.style.animation = ' ' ;
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