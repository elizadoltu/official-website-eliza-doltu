document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('see-more-button');
    const backButton = document.getElementById('back-to-menu-button');
    const currentPage = document.querySelector('.about-me.current-page');
    const menuPage = document.querySelector('.menu-see-more');

    function hideMenu() {
        // Hide the menu with a sliding animation to the left
        menuPage.classList.remove('menu-visible');
        menuPage.classList.add('menu-hidden');

        // Show the current page
        currentPage.classList.add('menu-visible');
        currentPage.classList.remove('menu-hidden');
    }

    function showMenu() {
        // Hide the current page
        currentPage.classList.remove('menu-visible');
        currentPage.classList.add('menu-hidden');

        // Show the menu with a sliding animation from the left
        menuPage.classList.add('menu-visible');
        menuPage.classList.remove('menu-hidden');
    }

    openButton.addEventListener('click', function () {
        // Show the menu when the "See More About Me" button is clicked
        showMenu();
    });

    backButton.addEventListener('click', function () {
        // Hide the menu and show the current page when the "Back" button is clicked
        hideMenu();
    });
});
