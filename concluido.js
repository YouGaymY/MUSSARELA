// Adiciona animação dos pontinhos no texto "carregando"
let dots = 0;
const dotsElement = document.getElementById("dots");

setInterval(() => {
    dots = (dots + 1) % 4; // Gera sequência de 0 a 3
    dotsElement.textContent = ".".repeat(dots);
}, 500); // Atualiza os pontinhos a cada 500ms

// Redireciona para a página pagamento.html após 7 segundos
setTimeout(() => {
    window.location.href = "pagamento.html";
}, 7000);