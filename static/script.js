document.addEventListener("DOMContentLoaded", () => {
    // garante que o botão sempre volte ao estado original
    const button = document.querySelector("form button");
    if (button) {
        button.disabled = false;
        button.innerText = "Classificar";
    }

    // efeito de fade-in no resultado
    const resultDiv = document.querySelector(".result");
    if (resultDiv) {
        resultDiv.style.opacity = 0;

        setTimeout(() => {
            resultDiv.style.transition = "opacity 1s";
            resultDiv.style.opacity = 1;
        }, 800); // delay antes da animação
    }
});
