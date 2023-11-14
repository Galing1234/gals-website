import { projects } from '../../data/projects.js' ;

export function loopThroughProjects(projectId) {
  let matchingProject ;

  projects.forEach(project => {
    if (projectId === project.id) {
      matchingProject = project ;
    }
  }) ;

  return matchingProject ;
}