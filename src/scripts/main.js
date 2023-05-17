// JavaScript to handle the toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    var navIcon = document.querySelector('.header__nav-icon');
    var navMenu = document.querySelector('.header__nav-menu');

    navIcon.addEventListener('click', function () {
      navIcon.classList.toggle('active');
      navMenu.classList.toggle('active');

    });
  });

