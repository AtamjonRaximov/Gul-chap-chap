function openMenu() {
    document.getElementById("menuOverlay").style.display = "flex";
}
function closeMenu() {
    document.getElementById("menuOverlay").style.display = "none";
}

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollElement = document.getElementById("scrollDown");
    if (scrollTop > lastScrollTop) {
        scrollElement.style.top = "10px";
    } else {
        scrollElement.style.top = "-100px";
    }
    lastScrollTop = scrollTop;
});