function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Corrected class name
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
