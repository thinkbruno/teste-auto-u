document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const textarea = document.querySelector("textarea");
    const button = form.querySelector("button");

    // cria elemento loading
    const loading = document.createElement("p");
    loading.innerText = "⏳ Processando...";
    loading.style.display = "none";
    loading.style.fontWeight = "bold";
    form.appendChild(loading);

    form.addEventListener("submit", (event) => {
        // valida se o campo não está vazio
        if (textarea.value.trim() === "") {
            event.preventDefault();
            alert("Por favor, insira o texto do email antes de classificar.");
            return;
        }

        // mostra loading
        button.disabled = true;
        button.innerText = "Classificando...";
        loading.style.display = "block";

        // aplica delay para animar o resultado
        setTimeout(() => {
            const resultDiv = document.querySelector(".result");
            if (resultDiv) {
                resultDiv.style.opacity = 0;
                resultDiv.style.transition = "opacity 1s";
                resultDiv.style.opacity = 1;
            }
        }, 10000); // 10 segundos de delay
    });
});
