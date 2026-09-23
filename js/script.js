const shadow = document.getElementById("back-shadow");


const modalCase = document.getElementById('modal-case')
const modalExperemental = document.getElementById('modal-experemental')

const modals = [modalCase, modalExperemental]

const openCase = document.getElementById("open-case")
const openExperemental = document.getElementById('open-experemental');

const burgerOpenCase = document.getElementById('burger-case-frame')
const burgerOpenExperemental = document.getElementById('burger-experemental-frame')

function openModal(modal) {
    shadow.classList.add('active');
    modal.classList.add('active');
}

function closeAllModals() {
    modals.forEach(m => m.classList.remove('active'));
    shadow.classList.remove('active');
}

openCase.addEventListener('click', function (event) {
    event.stopPropagation();
    modalCase.classList.contains('active') ? closeAllModals() : openModal(modalCase);
});

burgerOpenCase.addEventListener('click', function (event) {
    event.stopPropagation();
    modalCase.classList.contains('active') ? closeAllModals() : openModal(modalCase);
});

openExperemental.addEventListener('click', function (event) {
    event.stopPropagation();
    modalExperemental.classList.contains('active') ? closeAllModals() : openModal(modalExperemental);
});

burgerOpenExperemental.addEventListener('click', function (event) {
    event.stopPropagation();
    modalExperemental.classList.contains('active') ? closeAllModals() : openModal(modalExperemental);
});

shadow.addEventListener('click', function (event) {
    const clickedInsideModal = modals.some(m => event.target.closest('#' + m.id));
    if (!clickedInsideModal) closeAllModals();
});

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

document.querySelectorAll('.card-img').forEach(function (container) {
    const img = container.querySelector('img');
    const raw = img.dataset.images;
    if (!raw) return; // у кейса одна картинка — стрелки не нужны

    const images = JSON.parse(raw);
    if (images.length < 2) return;

    let index = 0;

    function show(newIndex) {
        index = (newIndex + images.length) % images.length; // зацикливаем
        img.src = images[index];
    }

    const prev = container.querySelector('.card-img-prev');
    const next = container.querySelector('.card-img-next');

    prev.addEventListener('click', function (event) {
        event.stopPropagation();
        show(index - 1);
    });

    next.addEventListener('click', function (event) {
        event.stopPropagation();
        show(index + 1);
    });
});