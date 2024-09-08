// Get the preloader element
const preloader = document.getElementById('preloader');

// Hide the preloader after 2 seconds
setTimeout(() => {
  preloader.style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 4000);