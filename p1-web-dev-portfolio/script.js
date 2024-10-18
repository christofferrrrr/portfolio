// Handle navigation link clicks
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const sectionId = event.target.getAttribute('data-section');
    
    // Fade out the current section
    document.querySelectorAll('section.visible').forEach(section => {
      section.classList.remove('visible'); 
      section.style.display = 'none'; 
    });
    
    // Fade in the new section
    const newSection = document.getElementById(sectionId);
    newSection.style.display = 'block'; 
    setTimeout(() => {
      newSection.classList.add('visible'); 
    }, 10); 
  });
});

// Handle logo click to go to landing section
document.querySelector('.logo').addEventListener('click', event => {
  event.preventDefault();
  
  document.querySelectorAll('section.visible').forEach(section => {
    section.classList.remove('visible');
    section.style.display = 'none';
  });
  
  const landingSection = document.getElementById('landing');
  landingSection.style.display = 'block';
  setTimeout(() => {
    landingSection.classList.add('visible');
  }, 10);
});

// Initialize: show only Landing section with visible class
document.querySelectorAll('section').forEach(section => {
  section.style.display = 'none';
});
const initialSection = document.getElementById('landing');
initialSection.style.display = 'block';
initialSection.classList.add('visible');

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construct the mailto link
  const subject = `Message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:gambanchristopher@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client with the prefilled message
  window.location.href = mailtoLink;
});

document.getElementById('burger-menu').addEventListener('click', function() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();
      const sectionId = event.target.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
  });
});
