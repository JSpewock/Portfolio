// const windowWidth = $('window').width()
// $('<div>').width(windowWidth).height('50px').appendTo('body')

$(() => {
  // console.log('connected')
  const windowWidth = $(document).width()
  const windowHeight = $(window).height()
  // $('<div>').css('width', (windowWidth*.9)).css('height', (windowHeight/2)).attr('class', 'header').appendTo('body')
  // $('<h2>').html(`Hello! My name is <span>Jeremy Spewock</span> and I am a Full-stack Software Engineer`).attr('id', 'intro-h2').appendTo('div')
  $('<div>').attr('id', 'main').appendTo('body').css('margin-top', 40)
  $('<div>').attr('id', 'personal').appendTo('#main')
  $('<div>').attr('id', 'headshot').appendTo('#personal')
  $('<img>').attr('src', './images/better-fit.jpg').attr('id', 'pic-of-me').appendTo('#headshot')
  $('<h2>').html('Jeremy Spewock').appendTo('#headshot')
  $('<h3>').text('Full-Stack Software Engineer').appendTo('#headshot')
  $('<div>').attr('id', 'about').appendTo('#personal')
  $('<h2>').text('About Me').attr('class', 'section').appendTo('#about')
  $('<p>').text('I am a college undergraduate with a passion and desire to deepen my understanding of computer science. I have a love for solving linear and logical problems and I’m determined to further my knowledge in this field and create powerful user-friendly applications by researching the market and using my ever-expanding skill set to meet the needs of the consumer.').appendTo('#about')
  $('<h3>').html(`Technical Skills`).appendTo('#about').attr('class', 'tech-skills')
  $('<p>').text('HTML | JavaScript | CSS | Python | jQuery | NodeJS | Git |  GitHub | MongoDB | React.js | Postman | Flexbox | Bootstrap | Express.js | REST API | SQL |').attr('class', 'tech-skills').appendTo('#about')
  $('<div>').attr('id', 'projects').appendTo('#main')
  $('<h2>').text('Projects').attr('class', 'section').appendTo('#projects')
  // I used https://stackoverflow.com/questions/2941189/how-to-overlay-one-div-over-another-div and https://api.jquery.com/hover/ to figure this hover thing out
  // ----------------------------------
  //             Project1
  // ----------------------------------
  $('<div>').attr('id', 'project1').attr('class', 'project').appendTo('#projects')
  $('<div>').attr('id', 'project1-img').attr('class', 'project-img').appendTo('#project1').hover(() => {
    $('#project1-info').css('display', 'block')
  },
  () => {
    $('#project1-info').css('display', 'none')
  }
  )
  $('<div>').attr('id', 'project1-info').attr('class', 'project-info').appendTo('#project1').hover(() => {
    $('#project1-info').css('display', 'block')
  }, () => {
    $('#project1-info').css('display', 'none')
  })
  $('<h1>').text('The Basic Pokemon Card Battle').attr('class', 'project-title').appendTo('#project1-info')
  $('<p>').text('This project was essentially a browser game that simulates a basic version of a pokemon card battle but you get random cards everytime! It was built using HTML, CSS, JavaScript, and jQuery as well as a third party api to collect the card data for the battle.').appendTo('#project1-info')
  $('<img>').attr('src', './images/project1.png').attr('class', 'project-picture').appendTo('#project1-img')

  // ----------------------------------
  //               Project2
  // ----------------------------------
  $('<div>').attr('id', 'project2').attr('class', 'project').appendTo('#projects')
  $('<div>').attr('id', 'project2-img').attr('class', 'project-img').appendTo('#project2').hover(() => {
    $('#project2-info').css('display', 'block')
  },
  () => {
    $('#project2-info').css('display', 'none')
  }
  )
  $('<div>').attr('id', 'project2-info').attr('class', 'project-info').appendTo('#project2').hover(() => {
    $('#project2-info').css('display', 'block')
  }, () => {
    $('#project2-info').css('display', 'none')
  })
  $('<h1>').text('GA Course Catalog').attr('class', 'project-title').appendTo('#project2-info')
  $('<p>').text('For this project I built a course catalog/study guide for General Assembly students in my class! This is a full CRUD app that was built using Node.js, Express, Mongoose, EJS, and Bcrypt.').appendTo('#project2-info')
  $('<img>').attr('src', './images/project2.png').attr('class', 'project-picture').appendTo('#project2-img')

  // ---------------------------------
  //             Project3
  // ---------------------------------
  $('<div>').attr('id', 'project3').attr('class', 'project').appendTo('#projects')
  $('<div>').attr('id', 'project3-img').attr('class', 'project-img').appendTo('#project3').hover(() => {
    $('#project3-info').css('display', 'block')
  },
  () => {
    $('#project3-info').css('display', 'none')
  }
  )
  $('<div>').attr('id', 'project3-info').attr('class', 'project-info').appendTo('#project3').hover(() => {
    $('#project3-info').css('display', 'block')
  }, () => {
    $('#project3-info').css('display', 'none')
  })
  $('<h1>').text('CockTails App').attr('class', 'project-title').appendTo('#project3-info')
  $('<p>').text('This project was actually a collaborative project that I worked on with 2 classmates. It is a MERN stack app that implements Mongo, Express, React, and Node to create a database for storing and searching for various cocktails. It also implements a third party api to increase the number of cocktails in the database.').appendTo('#project3-info')
  $('<img>').attr('src', './images/project3.png').attr('class', 'project-picture').appendTo('#project3-img')

  // ------------------------------
  //             Project4
  // ------------------------------
  $('<div>').attr('id', 'project4').attr('class', 'project').appendTo('#projects')
  $('<div>').attr('id', 'project4-img').attr('class', 'project-img').appendTo('#project4').hover(() => {
    $('#project4-info').css('display', 'block')
  },
  () => {
    $('#project4-info').css('display', 'none')
  }
  )
  $('<div>').attr('id', 'project4-info').attr('class', 'project-info').appendTo('#project4').hover(() => {
    $('#project4-info').css('display', 'block')
  }, () => {
    $('#project4-info').css('display', 'none')
  })
  $('<h1>').text('Rantz').attr('class', 'project-title').appendTo('#project4-info')
  $('<p>').text('This project is a discussion board based around ranting. This app was built using Python, Flask, and React and it features things such as jwts for user authentication.').appendTo('#project4-info')
  $('<img>').attr('src', './images/project4.png').attr('class', 'project-picture').appendTo('#project4-img')

  $('<div>').attr('id', 'contact-me').appendTo('#main')
  $('<h2>').text('Contact Me').attr('class', 'section').appendTo('#contact-me')
})