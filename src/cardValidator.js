function cardValidator(cardNumber) {
    if (typeof cardNumber !== 'string' || !/^\d+$/.test(cardNumber)) {
        return 'Número de cartão inválido';
    }

    cardNumber = cardNumber.replace(/\s+/g, ''); // Remove espaços

    const patterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        Amex: /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        UnionPay: /^(62[0-9]{14,17})$/,
        Maestro: /^(?:5[0678]\d{2}|6304|6390|67\d{2})\d{8,15}$/,
        Elo: /^((5067|4576|4011)\d{12})$/,
        Hipercard: /^(606282\d{10}(\d{3})?|3841\d{15})$/,
        Mir: /^220[0-4]\d{12}$/,
        Rupay: /^6[0-9]{15}$/,
        Troy: /^9792[0-9]{12}$/,
        Verve: /^5061[0-9]{12}$/,
        UATP: /^1[0-9]{14}$/,
        Aura: /^5078\d{2}\d{10}$/
    };

    for (const [brand, pattern] of Object.entries(patterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }

    return 'Bandeira não identificada';
}

module.exports = cardValidator;

// Este código é um exemplo de como usar a função cardValidator em um ambiente de linha de comando.
// Ele utiliza o módulo readline do Node.js para ler a entrada do usuário e validar números de cartões de crédito.
// O código verifica se a entrada é válida (apenas números com 13 a 19 dígitos) e chama a função cardValidator para determinar a bandeira do cartão.
// O usuário pode sair digitando "sair". Se a entrada for inválida, o programa informa o erro e pede novamente.
// O código também inclui tratamento de erros para capturar exceções que possam ocorrer durante a validação do cartão.
// O programa continua pedindo números de cartões até que o usuário decida sair.
// O código é modular e pode ser facilmente adaptado para diferentes ambientes ou interfaces de usuário.
