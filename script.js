// script.js

// Hamburger menu toggle for mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Modal logic for “Our Team”
const teamCard = document.querySelector('.student-card');
const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalList = document.getElementById('modal-list');
const closeBtn = document.querySelector('.close-btn');

// List of all 24 names
const names = [
  'Ahmad (Main One)',
  'Ahmad (Side Character)',
  'Mohammed',
  'Karmand',
  'Darya',
  'Aland',
  'Iwan',
  'Ayam',
  'Omer',
  'Dashy',
  'Shvan',
  'Mand',
  'Amin',
  'Chia',
  'Lava',
  'Sêbar',
  'Hêvi',
  'Sima',
  'Noor',
  'Bita',
  'Sahar Bwshra',
  'Hawrin',
  'Sêwa',
  'Klawd'
];

// When you click the single “Our Team” card:
teamCard.addEventListener('click', () => {
  // Clear out any existing list items
  modalList.innerHTML = '';

  // Populate the list with all 24 names
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    modalList.appendChild(li);
  });

  // Set modal title just in case
  modalTitle.textContent = 'Our Team (24 AI Engineers)';

  // Show the modal
  modal.style.display = 'flex';
});

// Also allow opening with Enter key
teamCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    teamCard.click();
  }
});

// Close modal when clicking “×”
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Smooth scroll for navbar links
const navAnchors = document.querySelectorAll('.nav-links a');
navAnchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // If mobile menu is open, close it
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});
