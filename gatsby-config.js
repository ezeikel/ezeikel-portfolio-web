module.exports = {
  siteMetadata: {
    title: 'Ezeikel Pemberton - Fullstack JavaScript Developer',
    intro: {
      name: 'Ezeikel Pemberton',
      title: 'Fullstack JavaScript Developer',
      skills: [
                'HTML',
                'CSS',
                'JS',
                'ES6+',
                'SASS',
                'LESS',
                'Stylus',
                'BEM',
                'Vanilla JS',
                'jQuery',
                'Webpack',
                'React',
                'Angular',
                'AngularJS',
                'BackboneJS',
                'HandlebarsJS',
                'NodeJS',
                'ExpressJS',
                'MongoDB',
                'Gulp',
                'Grunt',
                'Git',
                'SVN'
      ],
      paragraphs: [
        'Hi, my name is Ezeikel and I am a Fullstack JavaScript Developer with a real passion for JavaScript and beautiful UI.',
        'Currently freelancing at some dope companies, working on some challenging projects and creating some great web apps. My availability for new contracts varies but I am currently'
      ],
      availability: {
        date: '30/09/2018',
      },
      experience: {
        companies: [
          {
            name: 'Discovery Education',
            role: 'Front End Developer',
            url: 'http://www.discoveryeducation.com/'
          },
          {
            name: 'Superunion (formerly Addison Group)',
            role: 'Front End Developer',
            url: 'https://www.superunion.com/'
          },
          {
            name: 'Machine Earth',
            role: 'Front End Developer',
            url: 'http://machine.earth/'
          }
        ],
        projects: [
          {
            name: 'Ezeikel Pemberton Photography',
            tech: 'Angular 5, Typescript, RESTful API, Firebase 🔥',
            repoUrl: 'https://github.com/ezeikel/ezeikel-pemberton-photography-web',
            demoUrl: 'http://ezeikelpemberton.com/'
          },
          {
            name: 'Crownd',
            tech: 'React, Redux, GraphQL API, Node, Express, MongoDB',
            repoUrl: 'https://github.com/ezeikel/just-cutt-web',
            demoUrl: 'https://just-cutt.herokuapp.com/'
          },
        ]
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms'
  ]
};
