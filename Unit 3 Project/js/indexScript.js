"use strict";
// Array for lines of text
document.addEventListener('DOMContentLoaded', function () {
  const textLines = [
    "Hello! My name is",
    "Patrick Collins",
    "And I'm an",
    "aspiring software/web developer. Thank you for visiting my website. I have built this website in order to hold my portfolio and display my skills using HTML, CSS, and JavaScript."
  ];
  let currentLineIndex = 0;
  let currentCharIndex = 0;
  const delay = 50;

  // Function to type text
  function typeText() {
    if (currentLineIndex < textLines.length) {
      const currentLine = textLines[currentLineIndex];
      const lineElement = document.getElementById('line' + (currentLineIndex + 1));
      lineElement.classList.remove('hidden');
      if (currentCharIndex < currentLine.length) {
        lineElement.textContent += currentLine.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, delay);
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        setTimeout(typeText, delay * 10);
      }
    }
  }

  // Start typing when the page is loaded
  typeText();
});