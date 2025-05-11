# validador_bandeira_cartao_credito
Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot

# Entendendo o Desafio

Agora é a sua hora de brilhar e construir um perfil de destaque na **DIO**! A proposta aqui é ir além: você poderá **recriar do zero ou aperfeiçoar o projeto original** desenvolvido pelo instrutor.  

Para isso, dê um **fork no repositório-base** ou crie o **seu próprio repositório**, colocando em prática tudo o que aprendeu até agora.

## Descrição do Desafio

Este projeto tem como objetivo desenvolver uma aplicação simples capaz de **identificar a bandeira de um cartão de crédito** (como Visa, MasterCard, etc.) com base no número do cartão.  

Utilizando o **GitHub Copilot como assistente de codificação**, exploramos como a inteligência artificial pode **acelerar o desenvolvimento**, **sugerir trechos de código** e **melhorar a produtividade**.

## Objetivos de Aprendizagem

Ao concluir este desafio, você será capaz de:

- Reproduzir e/ou melhorar um projeto com base em um código existente;
- Aplicar os conceitos aprendidos em um cenário real;
- Documentar seu raciocínio técnico e decisões de forma clara e organizada;
- Utilizar o GitHub como plataforma para versionamento e exposição do seu trabalho.

## Entrega do Desafio

Para concluir este desafio, você deverá:

1. **Assistir a todas as vídeo-aulas**  
   _Não pule nenhuma etapa! As aulas contêm informações essenciais para o sucesso do seu projeto._

2. **Criar um repositório público no GitHub contendo:**
   - O **código-fonte** do seu projeto (recriado ou modificado);
   - Um arquivo **README.md** detalhado;
   - Qualquer outro arquivo relevante para a compreensão do projeto;
   - (Opcional) **Capturas de tela** relevantes organizadas em uma pasta `/images`.

3. **Enviar o link do seu repositório e uma breve descrição clicando no botão “Entregar Projeto”**

## Recursos Úteis

- **Materiais Complementares sobre GitHub**
  - [GitHub Quick Start](#) – Repositório com link para aulas de Git e GitHub
  - [GitBook: Formação GitHub Certification](#) – Material textual sobre GitHub
  - [Documentação do GitHub](https://docs.github.com/) – Guia completo para uso do GitHub
  - [GitHub Markdown](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github) – Guia específico para Markdown no GitHub

**Bons estudos!**


# Desenvolvimento do projeto:

## Validador de Bandeiras de cartão de crédito:
Este projeto tem como objetivo criar uma aplicação simples que identifica a bandeira de um cartão de crédito (como Visa, MasterCard, etc.) com base no número do cartão. Abaixo, explicamos passo a passo como o código foi estruturado e como ele funciona.

---

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar o desenvolvimento e a manutenção do código. Veja como os arquivos e pastas estão organizados:

```
credit-card-validator/
├── src/
│   ├── index.js         # Arquivo principal da aplicação
│   ├── cardValidator.js # Função que valida a bandeira do cartão
├── tests/
│   ├── cardValidator.test.js # Testes unitários para validar o código
├── images/             # Pasta opcional para capturas de tela
├── .gitignore          # Arquivo para ignorar arquivos desnecessários no Git
├── package.json        # Configuração do projeto Node.js
├── README.md           # Documentação do projeto
```

### Explicação dos Arquivos

1. **`src/index.js`**: Arquivo principal da aplicação. Ele utiliza a função `cardValidator` para identificar a bandeira de um número de cartão de crédito e exibe o resultado no console.

2. **`src/cardValidator.js`**: Contém a lógica principal para identificar a bandeira do cartão. Ele utiliza expressões regulares para verificar se o número do cartão corresponde a um padrão específico.

3. **`tests/cardValidator.test.js`**: Arquivo de testes unitários que garante que a função `cardValidator` funcione corretamente para diferentes cenários.

4. **`package.json`**: Arquivo de configuração do projeto Node.js, que define as dependências e os scripts para executar o código e os testes.

---

## Passo a Passo do Código

### 1. Função Principal: `cardValidator`

O arquivo cardValidator.js contém a função que valida a bandeira do cartão. Aqui está o código com explicação:

```javascript
function cardValidator(cardNumber) {
    // Padrões de bandeiras de cartões usando expressões regulares
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
        Verve: /^5061[0-9]{12}$/
    };

    // Verifica cada padrão para encontrar a bandeira correspondente
    for (const [brand, pattern] of Object.entries(patterns)) {
        if (pattern.test(cardNumber)) {
            return brand; // Retorna a bandeira correspondente
        }
    }

    return 'Bandeira desconhecida'; // Retorna caso nenhuma bandeira seja encontrada
}

module.exports = cardValidator;
```

**Como funciona:**
- A função recebe um número de cartão como entrada.
- Ela verifica o número contra uma lista de padrões de bandeiras (Visa, MasterCard, etc.) usando expressões regulares.
- Se o número corresponder a um padrão, a função retorna o nome da bandeira.
- Caso contrário, retorna "Bandeira desconhecida".

---

### 2. Arquivo Principal: `index.js`

O arquivo index.js utiliza a função `cardValidator` para validar um número de cartão e exibir o resultado:

```javascript
const cardValidator = require('./cardValidator');

// Exemplo de número de cartão
const cardNumber = '4111111111111111'; // Número de cartão Visa

// Identifica a bandeira do cartão
const brand = cardValidator(cardNumber);

// Exibe o resultado no console
console.log(`A bandeira do cartão é: ${brand}`);
```

**Como funciona:**
- Importa a função `cardValidator`.
- Define um número de cartão de exemplo.
- Chama a função para identificar a bandeira e exibe o resultado no console.

---

### 3. Testes Unitários: `cardValidator.test.js`

O arquivo de testes garante que a função `cardValidator` funcione corretamente:

```javascript
const cardValidator = require('../src/cardValidator');

test('Deve identificar um cartão Visa', () => {
    expect(cardValidator('4111111111111111')).toBe('Visa');
});

test('Deve identificar um cartão MasterCard', () => {
    expect(cardValidator('5105105105105100')).toBe('MasterCard');
});

test('Deve retornar "Bandeira desconhecida" para um número inválido', () => {
    expect(cardValidator('1234567890123456')).toBe('Bandeira desconhecida');
});
```

**Como funciona:**
- Cada teste verifica um caso específico (ex.: cartão Visa, MasterCard ou número inválido).
- Utiliza o framework Jest para rodar os testes.

---

## Configuração do Projeto

Antes de executar o código, você precisa configurar o projeto. Siga os passos abaixo:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o código:**
   ```bash
   npm start
   ```

3. **Execute os testes:**
   ```bash
   npm test
   ```

---

## Resumo

Este projeto demonstra como criar uma aplicação simples para identificar bandeiras de cartões de crédito. Ele utiliza expressões regulares para validar os números e inclui testes unitários para garantir a confiabilidade do código. Com esta estrutura, você pode facilmente expandir ou modificar o projeto para atender a diferentes necessidades.
