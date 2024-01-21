let bars = document.querySelector("header .container .bars");
let subNav = document.querySelector('.sub-nav');
let overlay = document.querySelector(".overlay");
let exitIcon = document.querySelector(".sub-nav .sub-header .exit-icon");
bars.onclick = function () {
    subNav.classList.toggle("clicked")
    overlay.classList.toggle("clicked")
    document.body.classList.toggle("clicked");
}
overlay.onclick = function () {
    subNav.classList.toggle("clicked")
    overlay.classList.toggle("clicked")
    document.body.classList.toggle("clicked");
}
exitIcon.onclick = function () {
    subNav.classList.toggle("clicked")
    overlay.classList.toggle("clicked")
    document.body.classList.toggle("clicked");
}
document.querySelector("body .charging").addEventListener('click',(eo) => {
    if (document.querySelector("body .chargeing-menu").hasAttribute('open')) {
        document.querySelector("body .chargeing-menu").removeAttribute("open");
    } else {
        document.querySelector("body .chargeing-menu").setAttribute("open",'');
    }
})
document.querySelector("body .products").addEventListener('click',(eo) => {
    if (document.querySelector("body .products-menu").hasAttribute('open')) {
        document.querySelector("body .products-menu").removeAttribute("open");
    } else {
        document.querySelector("body .products-menu").setAttribute("open",'');
    }
})