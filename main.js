document.addEventListener('DOMContentLoaded', function() {
  var images = [
      'resources/japan-car.jpg',
      'resources/woman-car.jpg',
      'resources/tram-lisbon.jpg'
 
    // Add more image URLs as needed
  ];

  var currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = 'url(' + images[currentIndex] + ')';
  }

  // Change background image every 5 seconds
  setInterval(changeBackground, 3000);
});
