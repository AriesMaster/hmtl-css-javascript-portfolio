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

// Custom Cursor Animation
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

// Ensure it only runs if the elements exist on the page
if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // The dot instantly follows the cursor
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // The outline has a smooth trailing animation
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });


    // Add visual interaction when hovering over clickable elements
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest('a, button, .icon, .hamburger-icon')) {
            cursorOutline.classList.add('hovering');
            cursorDot.classList.add('hovering');
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest('a, button, .icon, .hamburger-icon')) {
            cursorOutline.classList.remove('hovering');
            cursorDot.classList.remove('hovering');
        }
    });
}
