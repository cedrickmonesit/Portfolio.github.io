var mobileNav = document.querySelector('.mobile-nav');
var mobileNavBars = document.querySelector('.mobile-nav-bars');
mobileNavBars.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
})