// Função para formatar o CEP enquanto o usuário digita
function formatCep(input) {
    let cep = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (cep.length > 5) {
        cep = cep.slice(0, 5) + '-' + cep.slice(5, 8); // Adiciona o traço após os 5 primeiros números
    }
    input.value = cep;
}

// Função para enviar os dados preenchidos no formulário para a página 'confirmar.html'
function sendData() {
    // Captura os dados dos campos do formulário
    let street = document.getElementById('street').value;
    let number = document.getElementById('number').value;
    let neighborhood = document.getElementById('neighborhood').value;
    let city = document.getElementById('city').value;
    let cep = document.getElementById('cep').value;
    let state = document.getElementById('state').value;

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

    // Permite o envio do formulário (a página confirmará após a submissão)
    return true;
}