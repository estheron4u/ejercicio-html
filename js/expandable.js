'use strict'

const breakpointMobile = '(max-width: 574px)';
const breakpointTablet = '(min-width: 575px)';
const expandableButton = document.querySelectorAll('.expandable__button');
const expandableContent = document.querySelectorAll('.expandable__content');

document.addEventListener("DOMContentLoaded", changeExpandableStyle );
window.addEventListener('resize', changeExpandableStyle, true);

function toggleExpandable(event){
    const activatedButton = event.currentTarget;
    const expandableContainer = activatedButton.parentElement;
    const expandableContent = expandableContainer.querySelector('.expandable__content');
    const expandableChildren = expandableContent.children;
    let expandableChildrenHeight = 0;

    expandableContent.classList.toggle("expandable__content--is-expanded");
    activatedButton.classList.toggle("expandable__button--is-expanded");

    for (let i = 0; i < expandableChildren.length; i++) {
        if (expandableContent.offsetHeight <= 0){
            expandableChildrenHeight = expandableChildrenHeight + expandableChildren[i].offsetHeight;
            expandableContent.style.maxHeight = `${expandableChildrenHeight.toString()}px`;
        } else {
            expandableContent.style.maxHeight = `0px`;
        }
    }
}

function changeExpandableStyle () {
    if (window.matchMedia(breakpointMobile).matches && expandableButton.length >= 1) {
        for (let i = 0; i < expandableButton.length; i++) {
            expandableButton[i].addEventListener('click', toggleExpandable);
        }
        for (let i = 0; i < expandableContent.length; i++) {
            expandableContent[i].style.maxHeight = '0px';
        }
    } else if (window.matchMedia(breakpointTablet).matches) {
       for (let i = 0; i < expandableContent.length; i++){
           expandableContent[i].classList.remove("expandable__content--is-expanded");

           const expandableChildren = expandableContent[i].children;
           let expandableChildrenHeight = 0;

           for (let j = 0; j < expandableChildren.length; j++) {
               expandableChildrenHeight = expandableChildrenHeight + expandableChildren[j].offsetHeight;
               expandableContent[i].style.maxHeight = `${expandableChildrenHeight.toString()}px`;
           }
       }
       for (let i = 0; i < expandableButton.length; i++){
           expandableButton[i].classList.remove("expandable__button--is-expanded");
       }
    }
}

