// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn');
    const menuBtn = document.getElementById('menu-btn');
    const searchForm = document.querySelector('.search-form');
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        cartItemsContainer.classList.remove('active');
        sideMenu.classList.remove('active');
    });

    cartBtn.addEventListener('click', () => {
        cartItemsContainer.classList.toggle('active');
        searchForm.classList.remove('active');
        sideMenu.classList.remove('active');
    });

    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItemsContainer.classList.remove('active');
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    window.addEventListener('scroll', () => {
        searchForm.classList.remove('active');
        cartItemsContainer.classList.remove('active');
        sideMenu.classList.remove('active');
    });
});
