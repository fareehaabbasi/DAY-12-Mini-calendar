const month = document.querySelector('.month');
const days = document.querySelector('.day');
const weekday = document.querySelector('.weekday');
const year = document.querySelector('.year');

window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    days.textContent = date.getDate();
    year.textContent = date.getFullYear();
    month.textContent = date.toLocaleString('en-US', {month:'long'});
    weekday.textContent = date.toLocaleString('en-US', {weekday:'long'});
})