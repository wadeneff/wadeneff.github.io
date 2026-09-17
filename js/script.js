const openCase = document.getElementById("open-case");
const openExperemental = document.getElementById("open-experemental");
const openSocials = document.getElementById("open-contact");
const shadow = document.getElementById("back-shadow");
const menu = document.getElementById("menu");

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
};


function openMenu() {
    menu.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
}

openSocials.addEventListener("click", function(event) {
    event.stopPropagation(); // Не дает документу сразу же закрыть меню
    menu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("#menu")) {
        menu.classList.remove("active");
    }
});