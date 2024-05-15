"use strict";
// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

// Function to display random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quotes[randomIndex];
}

// Display initial quote
displayRandomQuote();

// Change quote every 5 seconds
setInterval(displayRandomQuote, 5000);

// Get img element and create array of images
document.addEventListener('DOMContentLoaded', function () {
  const imgElement = document.getElementById('img');
  const imageUrls = [
    '../images/Mingus Mountain.jpg',
    '../images/Apache.jpg',
    '../images/Graduation.jpg'
  ];
  let currentIndex = 0;

  // Function to update the image
  function updateImage() {
    imgElement.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }

  // Update the image initially
  updateImage();

  // Update the image every 5 seconds
  setInterval(updateImage, 5000);
});