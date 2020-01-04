var mobileNav = document.querySelector('.mobile-nav');
var mobileNavBars = document.querySelector('.mobile-nav-bars');
var hide = true;
mobileNavBars.addEventListener('click', function() {
    if(hide == true) {
        mobileNav.style.display = 'block';
        hide = false;
    }else {
        mobileNav.style.display = 'none';
        hide = true;
    }
});
