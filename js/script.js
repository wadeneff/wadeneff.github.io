const openCase = document.getElementById("open-case");
const openExperemental = document.getElementById("open-experemental");
const openSocials = document.getElementById("open-contact");
const shadow = document.getElementById("back-shadow");
const menu = document.getElementById("socials-menu");
const openBurgerMenu = document.getElementById("burger")
const burgerMenu = document.getElementById("burger-menu")

function openModal() {
    shadow.classList.add("active");
}

function closeModal() {
    shadow.classList.remove("active");
}

openCase.onclick = openModal;
openExperemental.onclick = openModal;

shadow.onclick = function(event) {
    if (event.target === shadow) {
        closeModal();
    }
}

openSocials.addEventListener("click", function(event) {
    event.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("#menu")) {
        menu.classList.remove("active");
    }
});

openBurgerMenu.addEventListener("click", function(event) {
    event.stopPropagation();
    burgerMenu.classList.toggle("active");
})

document.addEventListener("click", function(event) {
    if (!event.target.closest("#burgerMenu")) {
        burgerMenu.classList.remove("active");
    }
})