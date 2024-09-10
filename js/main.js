

// LOADING SCREEN -----------------------------------------------------
const loadingScreen = document.getElementById('loading-screen');
window.addEventListener('load', function() {
    loadingScreen.classList.add('hide');
    if (loadingScreen.classList.contains("hide")) {
        introAnim.play();
    }
});


// SCROLL ON CLICK -------------------------------------------------------------
window.addEventListener("load", scrollOnClick);


// INTRO ANIMATIONS ---------------------------------------------------------

var introAnim = gsap.timeline({paused:true, delay: 0.5})
introAnim
.from('.section-heading, .subtitle', 2, { autoAlpha: 0, scale: 0.9, stagger: 0.1}, 'all')
.from('.demo', 2, { autoAlpha: 0, scale: 0.9}, 'all')



//  MOBILE MENU -------------------------------------------------------------
mobileMenu();