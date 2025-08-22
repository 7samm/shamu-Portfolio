// ===== Typing Effect for Hero Section =====
const text = "Odoo & Python Developer | API Enthusiast";
let i = 0;
const heroElem = document.querySelector('#hero p');

function typingEffect() {
  if (i < text.length) {
    heroElem.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// ===== Smooth Scroll to Projects Section =====
function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  contactForm.reset();
});

// ===== Animate Skill Bars When About Section is Visible =====
const skillFills = document.querySelectorAll('.fill');

function animateSkills() {
  skillFills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = width;
    }, 500);
  });
}

// Use IntersectionObserver to trigger skill animation
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      animateSkills();
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// ===== Scroll Reveal for Project Cards =====
const projectCards = document.querySelectorAll('.project-card');

function revealProjects() {
  const triggerBottom = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealProjects);
revealProjects(); // run on load

// ===== Smooth Scroll for Navbar Links =====
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
