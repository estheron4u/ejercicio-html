'use strict'

const breakpointMobile = '(max-width: 575px)';
const expandableButton = document.querySelectorAll('.expandable__button');

function toggleExpandable(event){
    const activatedButton = event.currentTarget;
    const expandableContainer = activatedButton.parentElement;
    const expandableContent = expandableContainer.querySelector('.expandable__content');

    expandableContent.classList.toggle("expandable__content--is-expanded");
    activatedButton.classList.toggle("expandable__button--is-expanded");
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia(breakpointMobile).matches && expandableButton.length >= 1) {
        for (let i = 0; i < expandableButton.length; i++) {
            expandableButton[i].addEventListener('click', toggleExpandable);
        }
    }
});