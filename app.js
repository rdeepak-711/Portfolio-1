document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
    let currentSection = "";
    
    sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Adjust for navbar height
    if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
    }
    });

    navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
    }
    });
}

// Run on scroll and when a link is clicked
window.addEventListener("scroll", updateActiveLink);
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
    setTimeout(updateActiveLink, 500); // Delay for smooth scrolling
    });
});

updateActiveLink(); // Run once on page load
});
