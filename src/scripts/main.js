// JavaScript to handle the toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    var navIcon = document.querySelector('.header__hamburguer__icon');
    var navMenu = document.querySelector('.header__hamburguer__menu');

    navIcon.addEventListener('click', function () {
      navIcon.classList.toggle('active');
      navMenu.classList.toggle('active');

    });
  });

