export const projects = [
  {
    thumbnailImage: 'assets/restaurant-thumbnail.png',
    alt: 'restaurant-thumbnail',
    title: 'Restaurant-themed website',
    description: 'Check out my awesome restaurant-themed website!',
    projectShowcase: 'https://galing1234.github.io/restaurant-theme-website/sarahs-bakery',
    githubRepository: 'https://github.com/Galing1234/restaurant-theme-website',
    languages: 'HTML, CSS, JavaScript',
    id: generateUUID() 
  },
  {
    thumbnailImage: 'assets/tictactoe-thumbnail.png',
    alt: 'tictactoe-thumbnail',
    title: 'Classic Tic-Tac-Toe',
    description: 'Play Tic-Tac-Toe with yourself, a friend or even with an AI!',
    projectShowcase: 'https://galing1234.github.io/tictactoe/tictactoe',
    githubRepository: 'https://github.com/Galing1234/tictactoe',
    languages: 'HTML, CSS, JavaScript',
    id: generateUUID() 
  },
  {
    thumbnailImage: 'assets/counter-thumbnail.png',
    alt: 'counter-thumbnail',
    title: 'Simple animated counter',
    description: 'An animated counter, with features like increase and decrease!',
    projectShowcase: 'https://galing1234.github.io/animated-counter/counter',
    githubRepository: 'https://github.com/Galing1234/animated-counter',
    languages: 'HTML, CSS, JavaScript',
    id: generateUUID() 
  },
] ;

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8) ;
    return v.toString(16) ;
  }) ;
}