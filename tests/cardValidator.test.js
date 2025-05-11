const { validateCardNumber } = require('../src/cardValidator');

describe('validateCardNumber', () => {
    test('should return true for a valid card number', () => {
        const validCardNumber = '4111111111111111'; // Example of a valid Visa card number
        expect(validateCardNumber(validCardNumber)).toBe(true);
    });

    test('should return false for an invalid card number', () => {
        const invalidCardNumber = '1234567890123456';
        expect(validateCardNumber(invalidCardNumber)).toBe(false);
    });

    test('should return false for a card number with invalid characters', () => {
        const invalidCardNumber = '4111-1111-1111-1111';
        expect(validateCardNumber(invalidCardNumber)).toBe(false);
    });

    test('should return false for an empty card number', () => {
        const emptyCardNumber = '';
        expect(validateCardNumber(emptyCardNumber)).toBe(false);
    });

    test('should return false for a card number that is too short', () => {
        const shortCardNumber = '41111111111';
        expect(validateCardNumber(shortCardNumber)).toBe(false);
    });

    test('should return false for a card number that is too long', () => {
        const longCardNumber = '41111111111111111111';
        expect(validateCardNumber(longCardNumber)).toBe(false);
    });
});
// Este código é um exemplo de como usar a função cardValidator em um ambiente de linha de comando.
// Ele utiliza o módulo readline do Node.js para ler a entrada do usuário e validar números de cartões de crédito.
// O código verifica se a entrada é válida (apenas números com 13 a 19 dígitos) e chama a função cardValidator para determinar a bandeira do cartão.
// O usuário pode sair digitando "sair". Se a entrada for inválida, o programa informa o erro e pede novamente.
// O código também inclui tratamento de erros para capturar exceções que possam ocorrer durante a validação do cartão.
// O programa continua pedindo números de cartões até que o usuário decida sair.
// O código é modular e pode ser facilmente adaptado para diferentes ambientes ou interfaces de usuário.
