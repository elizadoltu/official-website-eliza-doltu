document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.getElementById('see-more-button');
    const backButton = document.getElementById('back-to-menu-button'); // Add this line
    const closeButton = document.querySelector('.close-button');
    const currentPage = document.querySelector('.about-me.current-page');
    const newPage = document.querySelector('.about-me.menu-see-more');
    const landingPage = document.querySelector('.landing-page');
    const footerSection = document.querySelector('.footer');

    openButton.addEventListener('click', function () {
        // Slide the landing page to the left
        currentPage.style.transform = 'translateX(-100%)';

        // Slide the menu to the right and fade in
        newPage.style.transform = 'translateX(0)';
        newPage.style.opacity = 1;
        newPage.classList.remove('hidden');

        setTimeout(() => {
            currentPage.classList.add('hidden');
            landingPage.style.display = 'none';
            footerSection.style.display = 'none';
        }, 500); // 500 milliseconds matches the transition duration
    });

    backButton.addEventListener('click', function () {
        // Slide the landing page back to the right and fade in
        currentPage.style.transform = 'translateX(0)';
        currentPage.style.opacity = 1;

        // Slide the menu back to the left and fade out
        newPage.style.transform = 'translateX(100%)';
        newPage.style.opacity = 0;
        newPage.classList.add('hidden'); // Hide the menu after sliding out

        // After the animation duration (in milliseconds), show the landing page
        setTimeout(() => {
            currentPage.classList.remove('hidden');
            landingPage.style.display = 'block';
            footerSection.style.display = 'block';
        }, 500); // 500 milliseconds matches the transition duration
    });
});
