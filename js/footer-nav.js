'use strict'

const expandableButton = document.querySelectorAll('.footer-nav__title');

function toggleNavAccordion(event){
        event.currentTarget.nextElementSibling.classList.toggle("footer-nav__expandable--active");
        event.currentTarget.classList.toggle("footer-nav__title--active");
}

if(window.matchMedia("(max-width: 575px)").matches){
    for (let i = 0; i < expandableButton.length; i++) {
        expandableButton[i].addEventListener('click', toggleNavAccordion);
    }
}