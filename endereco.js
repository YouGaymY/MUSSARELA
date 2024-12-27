// Função para formatar o CEP enquanto o usuário digita
function formatCep(input) {
    let cep = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (cep.length > 5) {
        cep = cep.slice(0, 5) + '-' + cep.slice(5, 8); // Adiciona o traço após os 5 primeiros números
    }
    input.value = cep;
}

// Função para enviar os dados preenchidos no formulário para a página 'confirmar.html'
function sendData(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os dados dos campos do formulário
    let street = document.getElementById('street').value.trim();
    let number = document.getElementById('number').value.trim();
    let neighborhood = document.getElementById('neighborhood').value.trim();
    let city = document.getElementById('city').value.trim();
    let cep = document.getElementById('cep').value.trim();
    let state = document.getElementById('state').value.trim();

    // Cria um objeto com os dados do formulário
    let addressData = {
        street: street,
        number: number,
        neighborhood: neighborhood,
        city: city,
        cep: cep,
        state: state
    };

    // Armazena os dados no localStorage para que possam ser acessados na página confirmar.html
    localStorage.setItem("addressData", JSON.stringify(addressData));

    // Redireciona para a página confirmar.html
    window.location.href = "./confirmar.html";
}

// Adiciona um evento ao formulário para chamar a função sendData
document.querySelector(".address-form").addEventListener("submit", sendData);