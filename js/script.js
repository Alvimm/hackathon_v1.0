'use strict';

///////////////////////////////////////////////////////////////////////////////////////

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////////////////////////////////

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

// btnNavEl.addEventListener('click', function () {
//   headerEl.classList.toggle('nav-open');
//   document.body.style.position = 'fixed';
//   document.body.style.top = `-${window.scrollY}px`;
// });

///////////////////////////////////////////////////////////////////////////////////////

// Smooth scrolling animation
// const scrollY = document.body.style.top;

// const allLinks = document.querySelectorAll('a:link');

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     // Scroll back to top
//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });

//     // Scroll to other links
//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Close mobile navigation
//     if (link.classList.contains('main-nav-link'))
//       headerEl.classList.toggle('nav-open');
//     document.body.style.position = '';
//     document.body.style.top = '';
//     window.scrollTo(0, parseInt(scrollY || '0') * -1);
//   });
// });

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

document
    .querySelector('.main-nav-list')
    .addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('main-nav-link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
    });
