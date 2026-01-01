const reasons = [
    "Porque me haces el más feliz",
    "Porque contigo me siento completo bb :)",
    "Porque me apoyas siempre",
    "Porque tu risa es mi sonido favorito amochito 😘",
    "Porque confías en mí",
    "Porque tu sonrisa es hermosa",
    "Porque eres mi persona favorita 🫶🏾",
    "Porque contigo soy yo mismo",
    "Porque me haces sentir especial mi vida 🥹",
    "Porque quiero pasar toda mi vida contigo ❤️"
];

let index = 0;
let firstClick = true;

const reasonText = document.getElementById("reason");
const button = document.getElementById("nextBtn");
const music = document.getElementById("music");

// Estado inicial
reasonText.textContent = "Haz click para descubrirla…";
reasonText.classList.add("show");

button.addEventListener("click", () => {

    // 🎵 Reproducir música en el primer click
    if (music && music.paused) {
        music.play();
    }

    reasonText.classList.remove("show");

    setTimeout(() => {
        reasonText.textContent = reasons[index];
        reasonText.classList.add("show");

        // Cambiar texto del botón después del primer click
        if (firstClick) {
            button.textContent = "Siguiente razón";
            firstClick = false;
        }

        index++;

        // Última razón
        if (index === reasons.length) {
            button.textContent = "Feliz aniversario 💖";
            button.disabled = true;
        }
    }, 300);
});
