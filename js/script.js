function openVideo(){

    document.getElementById("videoPopup").style.display="flex";

}



function closeVideo(){

    document.getElementById("videoPopup").style.display="none";

}
const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;



let particles = [];



for(let i = 0; i < 80; i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*2+1,

        speedX:(Math.random()-.5)*0.5,

        speedY:(Math.random()-.5)*0.5

    });

}



function animateParticles(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p=>{


        ctx.beginPath();


        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );


        ctx.fillStyle="rgba(96,165,250,.5)";


        ctx.fill();



        p.x += p.speedX;

        p.y += p.speedY;



        if(p.x<0 || p.x>canvas.width)
            p.speedX *= -1;


        if(p.y<0 || p.y>canvas.height)
            p.speedY *= -1;


    });


    requestAnimationFrame(animateParticles);

}


animateParticles();
// ===== SCROLL REVEAL =====


const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", ()=>{


    reveals.forEach((item)=>{


        let height = window.innerHeight;

        let top = item.getBoundingClientRect().top;


        if(top < height - 100){

            item.classList.add("active");

        }


    });


});
window.addEventListener("load", ()=>{


const reveals = document.querySelectorAll(".reveal");


function reveal(){

    reveals.forEach((item)=>{

        let top = item.getBoundingClientRect().top;

        let height = window.innerHeight;


        if(top < height - 100){

            item.classList.add("active");

        }

    });

}


window.addEventListener("scroll", reveal);


reveal();


});
// ===== SCROLL REVEAL =====

const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 120){

            element.classList.add("active");

        }

    });

}
