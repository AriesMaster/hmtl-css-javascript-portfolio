// Toggle the hamburger menu and update ARIA attributes for accessibility
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");
    icon.setAttribute('aria-expanded', isOpen);
}

// Ensure the hamburger icon is keyboard-accessible
const icon = document.querySelector(".hamburger-icon");
if (icon) {
    icon.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
        }
    });
}
