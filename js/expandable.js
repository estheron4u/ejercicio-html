'use strict'

const expandableButton = document.querySelectorAll('.expandable__button');

function toggleExpandable(event){
        event.currentTarget.nextElementSibling.classList.toggle("expandable__content--is-expanded");
        event.currentTarget.classList.toggle("expandable__button--is-expanded");
}

if(window.matchMedia("(max-width: 575px)").matches){
    for (let i = 0; i < expandableButton.length; i++) {
        expandableButton[i].addEventListener('click', toggleExpandable);
    }
}

// Esperar a que cargue el dom
// Comprobar que el expandable button existe
// Guardar cosas en variables
// Breakpoints en variables JS