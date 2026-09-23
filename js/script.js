const shadow = document.getElementById("back-shadow");

shadow.onclick = function(event) {
    if (event.target === shadow) {
        closeModalCase();
    }
}

const openCase = document.getElementById("open-case");
const openExperemental = document.getElementById("open-experemental");
const modalCase = document.getElementById('modal-case')

openCase.onclick = openModalCase;
// openExperemental.onclick = openModal;

const burgerCase = document.getElementById('burger-case-frame')
const burgerExperemental = document.getElementById('burger-experemental-frame')

burgerCase.onclick = openModalCase;
// burgerExperemental.onclick = openModal;


function openShadow() {
    shadow.classList.add("active");
}

function closeShadow() {
    shadow.classList.remove("active");
}

function openModalCase() {
    openShadow()
    modalCase.classList.add('active')
}

function closeModalCase() {
    closeShadow()
    modalCase.classList.remove('active')
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

document.querySelectorAll('.case-img').forEach(function (container) {
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

    const prev = container.querySelector('.case-img-prev');
    const next = container.querySelector('.case-img-next');

    prev.addEventListener('click', function (event) {
        event.stopPropagation();
        show(index - 1);
    });

    next.addEventListener('click', function (event) {
        event.stopPropagation();
        show(index + 1);
    });
});