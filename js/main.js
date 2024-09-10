

// LOADING SCREEN -----------------------------------------------------
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hide'); // Hide the loading screen
});


// SCROLL ON CLICK -------------------------------------------------------------
window.addEventListener("load", scrollOnClick);


// INTRO ANIMATIONS ---------------------------------------------------------

var introAnim = gsap.timeline({paused:true, delay: 0.5})
introAnim
.from('.section-heading, .subtitle', 1, { autoAlpha: 0, scale: 0.9, stagger: 0.1}, 'all')
.from('.demo', 1, { autoAlpha: 0, scale: 0.9, ease: 'back.out'}, 'all')
window.addEventListener("load", introAnim.play());


//  MOBILE MENU -------------------------------------------------------------
mobileMenu();