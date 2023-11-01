let display = document.getElementById('display');
let entradaAtual = '';

function insertDisplay(num) {
    display.innerHTML += num;
    entradaAtual += num;
    display.textContent = entradaAtual;
}

function cleanDisplay() {
    entradaAtual = '';
    display.textContent = '0';
}

function calcRes() {
    try {
        entradaAtual = eval(entradaAtual);
        display.textContent = entradaAtual;
    } catch (error) {
        display.textContent = 'Erro';
    }
}

// eval(), é usada para avaliar a expressão e verificar se é possível executá-la

/*
O .textContent é uma propriedade de elementos HTML que permite acessar e modificar o texto dentro de um elemento
O uso do textContent é apropriado para definir o conteúdo de elementos de texto simples, como parágrafos, cabeçalhos 
*/