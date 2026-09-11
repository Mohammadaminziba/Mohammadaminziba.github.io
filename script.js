// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }
    }, 1500);

    revealSections();
});

// Scroll Animation
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

// Theme Mode
const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const mode = document.body.classList.contains("light")
            ? "light"
            : "dark";

        localStorage.setItem("theme", mode);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
});
// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

    });
}