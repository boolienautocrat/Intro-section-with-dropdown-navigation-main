var iconHam = document.querySelector(".menu")

iconHam.addEventListener("click", function () {
    if (this.classList.contains("ham-menu")) {
        this.src = "/images/icon-close-menu.svg"
        this.classList.remove("ham-menu")
        this.classList.add("close-menu")
    } else if (this.classList.contains("close-menu")) {
        this.src = "/images/icon-menu.svg"
        this.classList.add("ham-menu")
        this.classList.remove("close-menu")
    }
})