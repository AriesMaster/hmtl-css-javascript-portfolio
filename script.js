function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Corrected class name
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if the sound has been played before
    if (!localStorage.getItem('soundPlayed')) {
        // Play sound when the website launches
        playSound();
        // Mark that the sound has been played
        localStorage.setItem('soundPlayed', true);
    }
});

function playSound() {
    const sound = new Audio("./assets/thabo-voice.mp3"); // Replace with the actual path to your sound file
    sound.play();
}

