//ABOUT

let testoNascosto = document.querySelector('#aboutItem');
let buttonMore = document.querySelector('#toggle');

function toggleAbout() {
    testoNascosto.classList.toggle('visible');
}

document.addEventListener('DOMContentLoaded', () => {
    buttonMore.addEventListener('click', toggleAbout)
})

//ALERT

function Auguri () {
    alert ("Buon Compleanno Gaia")
}

 document.addEventListener('DOMContentLoaded', Auguri)