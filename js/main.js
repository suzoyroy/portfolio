// FOR MAIN MENU POSITION STICKY

window.onscroll = function() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.querySelector(".navRow").classList.add("mainmenusticky");
      } else {
        document.querySelector(".navRow").classList.remove("mainmenusticky");
      }
};

// MAIN MENU POSITION STICKY END

// CODE FOR HAMBURGER MENU ITEM CLICK THEN DISAPEAR MENU

var menuItems = document.querySelectorAll(".item .link");

var checkInput = document.querySelector("input.checkbox");

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", hamburgerfunction);
});

function hamburgerfunction() {
    checkInput.checked = false;
}

// FOR EACH SECTION FADE IN ANIMATION
