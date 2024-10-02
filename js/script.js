"use strict";


const initLozad = () => {
    const lozadElements = document.querySelectorAll('[data-lozad]');

    if (!lozadElements) return;

    lozadElements.forEach(element => {
        const lozadObserver = lozad(element);

        lozadObserver.observe();
    })
}

const initCheckboxes = () => {
    const checkboxes = document.querySelectorAll('.checkbox');

    if (!checkboxes) return;

    checkboxes.forEach(checkbox => {
        const checkboxInput = checkbox.querySelector('input');

        checkboxInput.addEventListener('input', handleCheckbox);

        function handleCheckbox() {
            if (checkboxInput.checked) {
                checkbox.classList.add('is-checked');
            } else {
                checkbox.classList.remove('is-checked');
            }
        }
    })
}

const initAnchors = () => {
    const anchors = document.querySelectorAll('[data-anchor]');

    if (!anchors) return;

    anchors.forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            const scrollTarget = document.querySelector(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

}

window.addEventListener("DOMContentLoaded", (e) => {
    initLozad();
    initCheckboxes();
    initAnchors();
});
