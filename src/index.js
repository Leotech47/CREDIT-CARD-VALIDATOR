const cardValidator = require('./cardValidator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidInput(input) {
    return /^\d{13,19}$/.test(input); // Verifica se é um número com 13 a 19 dígitos
}

function askCardNumber() {
    rl.question('Digite o número do cartão de crédito (ou "sair" para encerrar): ', (cardNumber) => {
        if (cardNumber.trim().toLowerCase() === 'sair') {
            console.log('Encerrando o programa.');
            rl.close();
            return;
        }

        if (!isValidInput(cardNumber)) {
            console.log('Entrada inválida. Certifique-se de digitar apenas números com 13 a 19 dígitos.');
            askCardNumber(); // Rechama a função para pedir a entrada novamente
        } else {
            try {
                const brand = cardValidator(cardNumber);
                console.log(`A bandeira do cartão é: ${brand}`);
            } catch (error) {
                console.error('Erro ao validar o cartão:', error.message);
            } finally {
                askCardNumber(); // Permite validar outro cartão
            }
        }
    });
}

askCardNumber();

// Este código é um exemplo de como usar a função cardValidator em um ambiente de linha de comando.
// Ele utiliza o módulo readline do Node.js para ler a entrada do usuário e validar números de cartões de crédito.
// O código verifica se a entrada é válida (apenas números com 13 a 19 dígitos) e chama a função cardValidator para determinar a bandeira do cartão.
// O usuário pode sair digitando "sair". Se a entrada for inválida, o programa informa o erro e pede novamente.
// O código também inclui tratamento de erros para capturar exceções que possam ocorrer durante a validação do cartão.
// O programa continua pedindo números de cartões até que o usuário decida sair.
// O código é modular e pode ser facilmente adaptado para diferentes ambientes ou interfaces de usuário.
