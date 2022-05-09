'use strict'

const dropdownButton = document.querySelectorAll('.footer-nav__title');

function showNavDropdown(event){
    event.preventDefault()
    const dropdownTitle = event.currentTarget;
    if(document.documentElement.clientWidth < 575){
        dropdownTitle.nextElementSibling.classList.toggle("show");
        if(dropdownTitle.dataset.content === '+'){
            dropdownTitle.setAttribute('data-content', '-');
        } else if (dropdownTitle.dataset.content === '-'){
            dropdownTitle.setAttribute('data-content', '+');
        }
    }
}

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', showNavDropdown);
}