"use strict";
// Open and close top Nav when on mobile devices
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.toggle-btn');
  const navMenu = document.querySelector('.topNav');

  toggleBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      navMenu.classList.toggle('expanded');
  });

  // Event listener to close navigation when clicking outside of it
  document.addEventListener('click', function (event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickInsideToggle = toggleBtn.contains(event.target);
      
      if (!isClickInsideNav && !isClickInsideToggle) {
          navMenu.classList.remove('expanded');
      }
  });
});