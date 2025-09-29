// Modal Development Hour 1 - Foundation & Class Toggling
// First, add strict mode at the top
'use strict';

// Select the modal element
//const modalEl = document.querySelector('.modal');

// Select the overlay element
//const overlayEl = document.querySelector('.overlay');

// Select the close button
//const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons using querySelectorAll
//const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify our selections worked correctly
//console.log('Open buttons:', btnsOpenModalEl.length);


// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);