const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade grau 1';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3';
        }

        resultado.textContent = `Olá ${nome}, seu IMC é ${imc} e você está classificado como: ${classificacao}.`;
    }
    else {
        resultado.textContent = 'Por favor, preencha todos os campos.';
    }
}
calcular.addEventListener('click', calcularIMC);