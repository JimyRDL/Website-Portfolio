// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const descriptionText = document.getElementById('description-text');
    let currentIndex = 2; // Start with the middle image

    const descriptions = [
        "Description for Image 1",
        "Description for Image 2",
        "Description for Image 3",
        "Description for Image 4",
        "Description for Image 5"
    ];

    function updateSlider() {
        sliderItems.forEach((item, index) => {
            const position = (index - currentIndex + sliderItems.length) % sliderItems.length;
            item.setAttribute('da ta-index', position);
        });
        descriptionText.textContent = descriptions[currentIndex];
    }

    function moveToNext() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
    }

    function moveToPrev() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
    }

    // Initial setup
    updateSlider();

    // Event listeners for navigation buttons
    document.querySelector('.left-button').addEventListener('click', moveToPrev);
    document.querySelector('.right-button').addEventListener('click', moveToNext);
});
