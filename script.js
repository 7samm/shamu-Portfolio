// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for your message!');
});

// Typing effect for hero section
const text = "Odoo & Python Developer | API Enthusiast";
let i = 0;
const elem = document.querySelector('#hero p');
function typing() {
  if(i < text.length){
    elem.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();
