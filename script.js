var iconHam = document.querySelector(".menu")
var navMenu = document.querySelector(".nav-menu")
var html = document.querySelector("html")
var featBtn = document.querySelector(".features-btn")
var compBtn = document.querySelector(".company-btn")
var downFeat = document.querySelector(".icon-down-feat")
var downComp = document.querySelector(".icon-down-comp")
var features = document.querySelector(".features")
var company = document.querySelector(".company-info")
var lis = document.querySelector(".features").childNodes
var lis2 = document.querySelector(".company-info").childNodes
var buttons = document.querySelector(".cta").childNodes
var navItems = document.querySelector(".nav-menu div ul").childNodes
var reloadLi = [lis[1], lis[3], lis[5], lis[7], lis2[1], lis2[3], lis2[5], buttons[1], buttons[3], navItems[5], navItems[7]]

iconHam.addEventListener("click", function () {
    if (this.classList.contains("ham-menu")) {
        this.src = "./images/icon-close-menu.svg"
        this.classList.remove("ham-menu")
        this.classList.add("close-menu")
        navMenu.classList.add("nav-active")
        html.style.overflowY = "hidden"
    } else if (this.classList.contains("close-menu")) {
        this.src = "./images/icon-menu.svg"
        this.classList.add("ham-menu")
        this.classList.remove("close-menu")
        navMenu.classList.remove("nav-active")
        html.style.overflowY = "scroll"
    }
})


featBtn.addEventListener("click", function () {
    if (this.classList.contains("features-btn")) {
        downFeat.src = "./images/icon-arrow-up.svg"
        this.classList.add("feat-active")
        this.classList.remove("features-btn")
        features.style.display = "flex"
    } else if (this.classList.contains("feat-active")) {
        downFeat.src = "./images/icon-arrow-down.svg"
        this.classList.remove("feat-active")
        this.classList.add("features-btn")
        features.style.display = "none"
    }
})

compBtn.addEventListener("click", function () {
    if (this.classList.contains("company-btn")) {
        downComp.src = "./images/icon-arrow-up.svg"
        this.classList.add("comp-active")
        this.classList.remove("company-btn")
        company.style.display = "flex"
    } else if (this.classList.contains("comp-active")) {
        downComp.src = "./images/icon-arrow-down.svg"
        this.classList.remove("comp-active")
        this.classList.add("company-btn")
        company.style.display = "none"
    }
})

reloadLi.forEach((e) => {
    e.addEventListener("click", () => {
        location.reload()
    })
})

if (window.matchMedia('(max-width: 768px)').matches) {
    iconHam.style.display = "block"
} else {
    iconHam.style.display = "none"
}