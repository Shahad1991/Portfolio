const h2Element = document.getElementById('changingH2');
const h2Texts = ['kreativ', 'samarbeidsvillig', 'nysgerrig', 'struktureret', 'ambitiøs', 'detaljeorienteret', 'imødekommende'];
let currentIndex = 0;
let letterIndex = 0;

function typeWriter() {
    if (letterIndex < h2Texts[currentIndex].length) {
        h2Element.textContent += h2Texts[currentIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWriter, 100); // Juster hastigheden her
    } else {
        setTimeout(eraseText, 1000); // Juster pause før sletning her
    }
}

function eraseText() {
    if (letterIndex > 0) {
        h2Element.textContent = h2Element.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseText, 50); // Juster sletningshastigheden her
    } else {
        currentIndex = (currentIndex + 1) % h2Texts.length;
        setTimeout(typeWriter, 300); // Juster tid før skrivning starter igen her
    }
}

typeWriter(); // Start the typing animation





const menuIcon = document.querySelector(".mobil-icon");
const mobilList = document.querySelector(".mobil-list");

menuIcon.addEventListener("click", function () {
    mobilList.classList.toggle("mobil-list");
});








// Når siden er indlæst, fjern loading-animation
window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.display = 'none';
});
