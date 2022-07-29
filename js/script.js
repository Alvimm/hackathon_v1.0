'use strict';

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

document
    .querySelector('.main-nav-list')
    .addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('main-nav-link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
    });

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
document.querySelector('.smooth').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('smooth')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});
