var iconHam = document.querySelector(".menu")
var navMenu = document.querySelector(".nav-menu")
var html = document.querySelector("html")

iconHam.addEventListener("click", function () {
    if (this.classList.contains("ham-menu")) {
        this.src = "/images/icon-close-menu.svg"
        this.classList.remove("ham-menu")
        this.classList.add("close-menu")
        navMenu.classList.add("nav-active")
        html.style.overflowY = "hidden"
    } else if (this.classList.contains("close-menu")) {
        this.src = "/images/icon-menu.svg"
        this.classList.add("ham-menu")
        this.classList.remove("close-menu")
        navMenu.classList.remove("nav-active")
        html.style.overflowY = "scroll"
    }
})