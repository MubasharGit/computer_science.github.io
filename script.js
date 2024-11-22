// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').split('#')[1];
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


function scrollToServices() {
    // Get the element with id 'services-section'
    var section = document.getElementById('services-section');
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToAbout() {
    // Get the element with id 'about-section'
    var section = document.getElementById('about-section');
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToHome() {
    // Get the element with id 'home-section'
    var section = document.getElementById('home-section');
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  
  function scrollToProjects() {
    // Get the element with id 'projects-section'
    var section = document.getElementById('projects-section');
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  
  function scrollToContact() {
    // Get the element with id 'contact-section'
    var section = document.getElementById('contact-section');
    
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  }
  

  function redirectToAbout() {
    // Redirect to the 'about.html' page
    window.location.href = 'about.html';
  }

  function redirectToServices() {
    // Redirect to the 'services.html' page
    window.location.href = 'services.html';
  }
  
  function redirectToProjects() {
    // Redirect to the 'projects.html' page
    window.location.href = 'projects.html';
  }
  

  function redirectToContact() {
    // Redirect to the 'contact.html' page
    window.location.href = 'contact.html';
  }
  
  function redirectToHome() {
    // Redirect to the 'index.html' page
    window.location.href = 'index2.html';
  }