import { projects } from '../data/projects.js' ;
import { loopThroughProjects } from './utils/projectLoop.js' ;

const mainKidName = document.getElementById('main-kid-name') ;
const mainKidPosition = document.getElementById('main-kid-position') ;
const projectsGrid = document.getElementById('projects-grid') ;

let typingTimeout ;
let stoppingTimeout ;
let kidPosition = 1 ;

export function renderMain() {
  let projectHTML = '' ;

  projects.forEach(project => {
    projectHTML += `
      <div class="my-projects-project">
        <img src="${project.thumbnailImage}" alt="${project.alt}" class="project-image">

        <!--Project title-->
        
        <div class="project-title">
          ${project.title}
        </div>

        <!--Project description-->

        <div class="project-description">
          ${project.description}
        </div>

        <div class="project-buttons">
          <button class="project-button project-showcase" data-project-id="${project.id}">
            Project Showcase
          </button>

          <button class="project-button github-repository" data-project-id="${project.id}">
            Github Repository
          </button>
        </div>
        
        <div class="project-languages">
          ${project.languages}
        </div>
      </div>
    ` ;
  }) ;

  projectsGrid.innerHTML = projectHTML ;
  
  const projectShowcases = document.querySelectorAll('.project-showcase') ;
  const githubRepositories = document.querySelectorAll('.github-repository') ;

  projectShowcases.forEach(projectShowcase => {
    const projectId = projectShowcase.dataset.projectId ;
    const matchingProject = loopThroughProjects(projectId) ;

    console.log(matchingProject)

    projectShowcase.addEventListener('click', () => {
      window.open(matchingProject.projectShowcase) ;
    }) ;
  }) ;

  githubRepositories.forEach(githubRepository => {
    const projectId = githubRepository.dataset.projectId ;
    const matchingProject = loopThroughProjects(projectId) ;

    githubRepository.addEventListener('click', () => {
      window.open(matchingProject.githubRepository) ;
    }) ;
  }) ;

  setTimeout(() => {
    mainKidName.style.borderRight = 'none' ;
    mainKidPosition.style.opacity = 1 ;
    mainKidPosition.style.animation = `
      typing 1s steps(100, end)\,
      blink-caret 0.25s step-end infinite
    ` ;

    setTimeout(() => {
      typingForwards() ;
    }, 1000) ;
  }, 1000) ;
}

function typingForwards() {
  mainKidPosition.style.borderRight = '.15em solid orange' ;
  mainKidPosition.style.animation = `
    typing 1s steps(100, end),
    blink-caret 0.25s step-end infinite
  ` ;

  clearTimeout(stoppingTimeout) ;
  stoppingTimeout = setTimeout(() => {
    mainKidPosition.style.opacity = 1 ;
    typingTimeout = setTimeout(() => {
      typingBackwards() ;
    }, 1000) ;
  }, 1000) ;
}

function typingBackwards() {
  mainKidPosition.style.borderRight = '.15em solid orange' ;
  mainKidPosition.style.animation = `
    typing-backwards 1s steps(100, end),
    blink-caret 0.25s step-end infinite
  ` ;

  clearTimeout(stoppingTimeout) ;
  stoppingTimeout = setTimeout(() => {
    switch (kidPosition) {
      case 1:
        kidPosition = 2 ;
        mainKidPosition.innerHTML = `
          A <span id="main-kid-marked">Software Engineer</span>,
        ` ;
        break ;
      case 2:
        kidPosition = 3 ;
        mainKidPosition.innerHTML = `
          A <span id="main-kid-marked">Freelancer</span>,
        ` ;
        break ;
      case 3:
        kidPosition = 1 ;
        mainKidPosition.innerHTML = `
          A <span id="main-kid-marked">Web Developer</span>,
        ` ;
        break ;
    }
    mainKidPosition.style.opacity = 0 ;
    typingTimeout = setTimeout(() => {
      mainKidPosition.style.opacity = 1 ;
      typingForwards() ;
    }, 200) ;
  }, 1000) ;
}