// ANIMATED BACK -------------------------------------------------------------
function animatedBack() {
    var animBack = document.querySelector(".particle-section");

    function getRandomInt(min, max) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        return Math.random() * (max - min) + min;
    }

    setInterval(function(){
        var particle = document.createElement("div");
        particle.classList.add("particle");
        var size = getRandomInt(10, 50) + "px";
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = getRandomInt(0, 2000) + "px";
        particle.style.opacity = getRandomInt(0.2, 1);
        animBack.append(particle);

        setTimeout(function() {
            animBack.removeChild(particle);
        }, 30000);
        
    }, 80);
}




// SCROLL ON CLICK NAV LINK ----------------------------------------------------
function scrollOnClick() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
      });
}

//  MOBILE MENU -------------------------------------------------------------

function mobileMenu() {
    var openMenuBtn = document.querySelector('.mobile-menu-btn');
    var closeMenuBtn = document.querySelector('.close-mobile-menu');
    var mobileLink = document.querySelectorAll('.mobile-link');

    openMenuBtn.addEventListener("click", function(){
        gsap.to(".mobile-menu", { right: "0px", ease: "power2.out" });
    });

    closeMenuBtn.addEventListener("click", function(){
        gsap.to(".mobile-menu", { right: "-400px", ease: "power2.out" });
    });

    mobileLink.forEach(link => {
        link.addEventListener("click", function(){
            gsap.to(".mobile-menu", { right: "-400px", ease: "power2.out" });
        });
    })

    
}