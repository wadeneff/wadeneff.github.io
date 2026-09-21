const shadow = document.getElementById("back-shadow");

shadow.onclick = function(event) {
    if (event.target === shadow) {
        closeModal();
    }
}

const openCase = document.getElementById("open-case");
const openExperemental = document.getElementById("open-experemental");
const modal = document.getElementById('modal')

openCase.onclick = openModal;
openExperemental.onclick = openModal;

const burgerCase = document.getElementById('burger-case-frame')
const burgerExperemental = document.getElementById('burger-experemental-frame')

burgerCase.onclick = openModal;
burgerExperemental.onclick = openModal;


function openShadow() {
    shadow.classList.add("active");
}

function closeShadow() {
    shadow.classList.remove("active");
}

function openModal() {
    openShadow()
    modal.classList.add('active')
}

function closeModal() {
    closeShadow()
    modal.classList.remove('active')
}

const openSocials = document.getElementById("open-contact");
const burgerOpenSocials = document.getElementById("burger-contact-frame");
const menu = document.getElementById("socials-menu");
const burgerSocialsMenu = document.getElementById("burger-socials-menu");


openSocials.addEventListener("click", function(event) {
    event.stopPropagation();
    menu.classList.toggle("active");
});

burgerOpenSocials.addEventListener("click", function(event) {
    event.stopPropagation();
    burgerSocialsMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("#menu")) {
        menu.classList.remove("active");
    }
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("#burgerSocialsMenu")) {
        burgerSocialsMenu.classList.remove("active");
    }
});

const openBurgerMenu = document.getElementById("burger")
const burgerMenu = document.getElementById("burger-menu")

openBurgerMenu.addEventListener("click", function(event) {
    event.stopPropagation();
    burgerMenu.classList.toggle("active");
})

document.addEventListener("click", function(event) {
    if (!event.target.closest("#burgerMenu")) {
        burgerMenu.classList.remove("active");
    }
})
