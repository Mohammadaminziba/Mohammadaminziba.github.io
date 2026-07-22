window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2000);
});
alert("JavaScript OK");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;

        if(top < height - 100){
            section.classList.add("show");
        }

    });

});
const cards = document.querySelectorAll(".about, .skills, .journey, .gallery");
// ===== Theme Mode =====

const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});