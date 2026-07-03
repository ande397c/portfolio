// Project images::

// Twitter
import twitterIntro from '@assets/twitter-intro.png'
// Countries
import countriesImage from '@assets/countries-intro.png'
//Imdb
import imdbImage from '@assets/imdb-intro.png'
// Weather
import weahterIntro from '@assets/weather-intro.png'
// Kanban
import kanbanIntro from '@assets/kanban-intro.png'

export const projectData = [
  {
    slug: 'projects/twitter-clone/',
    heading: 'Twitter clone',
    projectImg: twitterIntro,
    desc: 'Full stack Twitter clone made with JavaScript, Tailwind, Python, and SQLite',
    tag: 'twitter',
    intro:
      'This project was part of my 1. semester Web Developement exam. The overall project included a long list of features and requirements, like creating, retweeting and liking tweets. This project also served as my introduction to Python, Bottle and SQL databases.',
    // demoLink: 'https://ande.eu.pythonanywhere.com/',
    stack: ['Tailwind', 'JavaScript', 'Python', 'Bottle', 'SQLite'],
    navigateLinks: {
      linkPrevious: '',
      linkNext: '/projects/countries-project/',
    },
  },
  {
    slug: 'projects/countries-project/',
    heading: 'Countries API project',
    projectImg: countriesImage,
    desc: 'Advanced Frontend Mentor challenge. Supports light/dark them and made with vanilla JavaScript.',
    tag: 'countries',
    intro:
      'This project is an advanced challenge on Frontend Mentor. The goal for me was to improve my JavaScript skills while incorporating the use of an external API. The project supports dark/light theme. In retrospect, I would have liked to include the use of a JavaScript framework in this project.',
    // demoLink: 'https://frontend-mentor-api-countries.netlify.app/',
    repoLink: 'https://github.com/ande397c/Frontend-Mentor-rest-countries-api',
    stack: ['HTML', 'CSS', 'JavaScript'],
    navigateLinks: {
      linkPrevious: '/projects/twitter-clone/',
      linkNext: '/projects/rating-game/',
    },
  },
  {
    slug: 'projects/rating-game/',
    heading: 'Movie rating game',
    projectImg: imdbImage,
    desc: 'Can you guess which movie has the highest rating? Try and see if you can beat the current highscore.',
    tag: 'imdb',
    intro:
      'The idea for the project sprung from an early interest for movies. The goal for the user is to correctly guess the movie with highest rating. The user can submit the score and compare it against other users. The site uses offical Imdb rating scores and Supabase for storing the user data. Future plans for this project includes: Ability to choose categories, difficulties and more.',
    demoLink: 'https://rating-guess.netlify.app/',
    repoLink: 'https://github.com/ande397c/react-movie-rating/tree/main',
    stack: ['Tailwind', 'React', 'TypeScript', 'Supabase'],
    navigateLinks: {
      linkPrevious: '/projects/countries-project/',
      linkNext: '/projects/weather-app/',
    },
  },
  {
    slug: 'projects/weather-app/',
    heading: 'Weather app clone',
    projectImg: weahterIntro,
    desc: 'IOS weather app clone. See detailed weather information for any location and save it to the frontpage.',
    tag: 'weather',
    intro:
      'This project is a clone of the iOS Weather app. It uses Axios for easier integration with the OpenWeatherMap API and ESLint to identify and fix issues in the JavaScript code. The goal is to replicate the UI elements and features of the iOS app. In the future, this project will serve as a solid foundation for working with mobile development, such as React Native or Expo.',
    demoLink: 'https://horizonwatch.netlify.app/',
    repoLink: 'https://github.com/ande397c/weather-app',
    stack: ['Tailwind', 'React', 'TypeScript', 'REST API'],
    navigateLinks: {
      linkPrevious: '/projects/rating-game/',
      linkNext: '/projects/kanban-board/',
    },
  },
  {
    slug: 'projects/kanban-board/',
    heading: 'Kanban board',
    projectImg: kanbanIntro,
    desc: 'Kanban board, made with Vue3, Vuetify, Typescript and tested using Vitest.',
    tag: 'kanban',
    intro:
      'This project served as an introduction to Vue and the corresponding technologies used such as the ui library Vuetify and the Vue testing tool Vitest. The board supports functionalities like, deleting/adding tasks and lists and dragging tasks. In regard to future plans for this project, I´am planning to hook the data up to a real backend to allow for data persistence. Furthermore I would like to implement the ability to edit cards and make the lists draggable.',
    demoLink: 'https://vue-board-kanban.netlify.app/',
    repoLink: 'https://github.com/ande397c/vue-kanban-board',
    stack: ['Vuetify', 'Vue', 'TypeScript', 'Vitest'],
    navigateLinks: {
      linkPrevious: '/projects/weather-app/',
      linkNext: '',
    },
  },
  // {
  //   slug: 'projects/platform-for-ungdomsoeen/',
  //   heading: 'Platform for Ungdomsøen',
  //   projectImg: kanbanIntro,
  //   desc: 'Bachelor exam project, where my group and I developed a mobile and webapp for Ungdomsøen.',
  //   tag: 'kanban',
  //   intro:
  //     'This project served as an introduction to Vue and the corresponding technologies used such as the ui library Vuetify and the Vue testing tool Vitest. The board supports functionalities like, deleting/adding tasks and lists and dragging tasks. In regard to future plans for this project, I´am planning to hook the data up to a real backend to allow for data persistence. Furthermore I would like to implement the ability to edit cards and make the lists draggable.',
  //   demoLink: 'https://vue-board-kanban.netlify.app/',
  //   repoLink: 'https://github.com/ande397c/vue-kanban-board',
  //   stack: ['Vuetify', 'Vue', 'TypeScript', 'Vitest'],
  //   navigateLinks: {
  //     linkPrevious: '/projects/weather-app/',
  //     linkNext: '',
  //   },
  // },
]
