// Função para calcular fatorial
function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Função para calcular combinações
function calcularCombinacoes() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);
    
    if (isNaN(n) || isNaN(p) || n < 1 || p < 1 || p > n) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos para n e p.";
        return;
    }

    // Calculando o número de combinações
    const combinacoes = fatorial(n) / (fatorial(p) * fatorial(n - p));

    // Exibindo o resultado
    document.getElementById('resultado').textContent = `O número de combinações é: ${combinacoes}`;
}
