var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        myNav.classList.add("nav-colored");
    }
    else {
        myNav.classList.remove("nav-colored");
    }
};
