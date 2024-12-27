// Recupera os dados do endereço armazenados no localStorage e exibe na página de confirmação
window.onload = function() {
    let addressData = localStorage.getItem("addressData");
    if (addressData) {
        addressData = JSON.parse(addressData); // Converte os dados de volta para um objeto
        let confirmationText = `
            <p><strong>Rua:</strong> ${addressData.street}</p>
            <p><strong>Número:</strong> ${addressData.number}</p>
            <p><strong>Bairro:</strong> ${addressData.neighborhood}</p>
            <p><strong>Cidade:</strong> ${addressData.city}</p>
            <p><strong>CEP:</strong> ${addressData.cep}</p>
            <p><strong>Estado:</strong> ${addressData.state}</p>
        `;
        document.getElementById("addressConfirmation").innerHTML = confirmationText;
    } else {
        document.getElementById("addressConfirmation").innerText = "Nenhum endereço encontrado.";
    }

    // Botão para "Voltar e Editar"
    document.getElementById("backButton").addEventListener("click", function() {
        window.location.href = "endereco.html"; // Redireciona para a página de edição
    });

    // Botão para "Confirmar"
    document.getElementById("confirmButton").addEventListener("click", function() {
        window.location.href = "concluido.html"; // Redireciona para a página de confirmação final
    });
};