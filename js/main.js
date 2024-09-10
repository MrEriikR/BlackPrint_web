

// LOADING SCREEN -----------------------------------------------------
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hide'); // Hide the loading screen
});


// SCROLL ON CLICK -------------------------------------------------------------
window.addEventListener("load", scrollOnClick);


// INTRO ANIMATIONS ---------------------------------------------------------

// var introAnim = gsap.timeline({paused:true, delay: 1})
// introAnim
// .from('.qro', 1, { autoAlpha: 0, scale: 0.9})
// window.addEventListener("load", introAnim.play());


//  MOBILE MENU -------------------------------------------------------------
mobileMenu();