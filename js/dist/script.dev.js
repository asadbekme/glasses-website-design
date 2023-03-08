"use strict";

var searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = function () {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
};

var navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = function () {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
};

window.onscroll = function () {
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
};

var slides = document.querySelectorAll('.home .slide');
var index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}