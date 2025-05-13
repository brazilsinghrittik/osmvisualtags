// Initialize Map
var map = L.map('osm-map').setView([23.8103, 90.4125], 13);  // Center to Dhaka, Bangladesh

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example marker for Dhaka
L.marker([23.8103, 90.4125]).addTo(map)
  .bindPopup('<b>Dhaka</b><br>Capital of Bangladesh')
  .openPopup();

// Fade-in effect for images and sections
window.addEventListener('scroll', function () {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

