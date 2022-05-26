'use strict'

const expandableButton = document.querySelectorAll('.expandable__button');

function toggleExpandable(event){
        event.currentTarget.nextElementSibling.classList.toggle("expandable__element--is-expanded");
        event.currentTarget.classList.toggle("expandable__button--is-expanded");
}

if(window.matchMedia("(max-width: 575px)").matches){
    for (let i = 0; i < expandableButton.length; i++) {
        expandableButton[i].addEventListener('click', toggleExpandable);
    }
}