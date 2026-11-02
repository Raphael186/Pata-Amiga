// Interação adicional (sobre.html): o botão mostra e oculta o painel de resultados.

// Localiza o botão e o painel pelo id do HTML.
const botaoResultados = document.getElementById("botaoResultados");
const painelResultados = document.getElementById("painelResultados");

// Oculta o painel quando o JavaScript é executado.
painelResultados.style.display = "none";

// Alterna a visibilidade quando ocorre um clique.
function alternarResultados() {
    // Verifica se o painel está oculto.
    if (painelResultados.style.display === "none") {
        painelResultados.style.display = "block";
        botaoResultados.textContent = "Ocultar resultados";
    } else {
    // Se estiver visível, esconde o painel.
        painelResultados.style.display = "none";
        botaoResultados.textContent = "Mostrar resultados";
    }
}

// Executa a função a cada clique no botão.
botaoResultados.addEventListener("click", alternarResultados);
