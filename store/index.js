export const state = () => ({
  ownerName: 'Mikhail Levi',
  ownerSubtitle: 'Full Stack Web Developer',
  ownerAvatarUrl: 'photos/mikhail-levi-bkk-2020.jpg',
  ownerAvatarTitle: 'Mikhail Levi Bangkok 2020',
  primarySkills: {
    Laravel: 'fab fa-laravel',
    PHP: 'fab fa-php',
    'Vue JS': 'fab fa-vuejs',
    JavaScript: 'fab fa-js-square',
    Docker: 'fab fa-docker',
    Git: 'fab fa-git-alt',
    HTML5: 'fab fa-html5',
    CSS3: 'fab fa-css3-alt',
    Linux: 'fab fa-linux',
    SQL: 'fas fa-database',
    Angular: 'fab fa-angular',
    Bootstrap: 'fab fa-bootstrap',
    SASS: 'fab fa-sass'
  },
  contacts: [
    {
      name: '@mikhail_levi',
      icon: 'fab fa-telegram-plane',
      link: 'https://t.me/mikhail_levi'
    },
    {
      name: 'LinkedIn Profile',
      icon: 'fab fa-linkedin',
      link: 'https://ru.linkedin.com/in/mikhail-levi-913b777a'
    },
    {
      name: '@mindonline',
      icon: 'fab fa-github',
      link: 'https://github.com/mindonline'
    }
  ],
  workEfficiencyData: [
    {
      name: 'Remote work',
      value: 90,
      color: 'blue'
    },
    {
      name: 'Remote communication',
      value: 80,
      color: 'red accent-1'
    },
    {
      name: 'Coding Frontend',
      value: 90,
      color: 'light-green darken-4'
    },
    {
      name: 'Coding Backend',
      value: 80,
      color: 'deep-purple darken-1'
    },
    {
      name: 'Write tests',
      value: 70,
      color: 'teal lighten-3'
    }
  ]
})
