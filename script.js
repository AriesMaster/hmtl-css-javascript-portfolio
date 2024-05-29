function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('soundPlayed')) {
        playSound();
        localStorage.setItem('soundPlayed', true);
    }
});

function playSound() {
    const sound = new Audio("./assets/thabo-voice.mp3");
    sound.play();
}