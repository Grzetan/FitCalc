const man = document.querySelector('#man');
const woman = document.querySelector('#woman');
const form = document.querySelector('#form');
const back = document.querySelector('#backToSex');
const hidden = document.querySelector('#sex-form');

man.onclick = clickMan;
woman.onclick = clickWoman;
back.onclick = backToSex;

function clickMan() {
    form.style.animation = "fadeInMan 1s";
    form.className = ("activeForm Man");
    hidden.setAttribute("value", "0");
}

function clickWoman() {
    form.style.animation = "fadeInWoman 1s";
    form.className = ("activeForm Woman");
    hidden.setAttribute("value", "1");
}

function backToSex() {
    form.style.animation = "fadeOut 1s";
    setTimeout(() => { form.className = ("unActiveForm"); }, 1000);
}
