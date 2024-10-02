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

// function mobileMenu() {
//     var openMenuBtn = document.querySelector('.mobile-menu-btn');
//     var closeMenuBtn = document.querySelector('.close-mobile-menu');
//     var mobileLink = document.querySelectorAll('.mobile-link');

//     openMenuBtn.addEventListener("click", function(){
//         gsap.to(".mobile-menu", { right: "0px", ease: "power2.out" });
//     });

//     closeMenuBtn.addEventListener("click", function(){
//         gsap.to(".mobile-menu", { right: "-400px", ease: "power2.out" });
//     });

//     mobileLink.forEach(link => {
//         link.addEventListener("click", function(){
//             gsap.to(".mobile-menu", { right: "-400px", ease: "power2.out" });
//         });
//     })

    
// }



// SHOW SUB ELEMENTS IN A LIST ------------------------------------------------------


function showSubelement() {
    var list = document.querySelectorAll(".list");
    list.forEach(el => {
        el.addEventListener("mouseenter", function(){
            gsap.to(".sub-el", { autoAlpha: 1 });
            gsap.to("li", { marginBottom: "10px" });
        });
    
        el.addEventListener("mouseleave", function(){
            gsap.to(".sub-el", { autoAlpha: 0 });
            gsap.to("li", { marginBottom: "0px" });
        });
    })
    
}

// SELECT TARGET -----------------------------------------------------

function selectTarget() {
    var targets = document.querySelectorAll(".target-btn");
    var sections = ["retailers", "investors", "developers", "brokers"];
    
    targets.forEach(target => {
        target.addEventListener("click", function() {
            targets.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            var selectedSection = this.id.replace("-cta", "");
            sections.forEach(section => {
                gsap.to("#" + section, 0.3, { autoAlpha: section === selectedSection ? 1 : 0 });
            });
        });
    });
}


// ANIMATE ON SCROLL ------------------------------------------------


function animateSectionsOnScroll() {
    gsap.registerPlugin(ScrollTrigger);
    var sections = [
        {
            id: "#platform",
            animation: function() {
              
                gsap.from(
                    "#platform .platform-image, #platform .description, #platform .sub-description, #platform .list-el, #platform .btn",
                    { y: 50, autoAlpha: 0, stagger: 0.1}
                );
            }
        },
        {
            id: "#features",
            animation: function() {
               
                gsap.from(
                    "#features .section-heading, #features .feature-description, #features .feature_image",
                    { y: 50, autoAlpha: 0, stagger: 0.1},
                );
            }
        },
        {
            id: "#targets",
            animation: function() {
              
                gsap.from(
                    "#targets .section-heading, #targets .target-btn, #targets .target-description",
                    { scale: 0.8, autoAlpha: 0, stagger: 0.1 },
                );
            }
        },
        {
            id: "#capabilities",
            animation: function() {
              
                gsap.from(
                    "#capabilities .section-heading",
                    { scale: 0.8, autoAlpha: 0, stagger: 0.1 },
                );
            }
        }
    ];


    sections.forEach(function(section) {
        ScrollTrigger.create({
            trigger: section.id,
            start: "top center", 
            onEnter: function(self) {
                section.animation();
                self.kill();
            },
            
        });
    });
}

