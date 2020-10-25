const form2 = document.querySelector('#main-form');
const loader = document.querySelector('#loader');
const form_section = document.querySelector('#form');
const results = document.querySelector('#results');
const header = document.querySelector('header');


function submitOn() {
    window.location.href = '#results';
    results.style.display = 'flex';
    loader.style.animation = "fadeIn 1s";
    loader.className = "loader";

    setTimeout(() => {
        loader.style.animation = "fadeOutResult 1s";
        form_section.className = 'unActiveForm';
    }, 1500);

    setTimeout(() => {
        loader.className = "hidden";
        header.style.display = 'none';
    }, 2500);
}

form2.addEventListener('submit', submitOn)




