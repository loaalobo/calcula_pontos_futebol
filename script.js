function confereInputs() {
    const vitorias = document.getElementById('vitorias').value;
    const empates = document.getElementById('empates').value;

    if (vitorias == '' || empates == '') {
        alert("Preencha todos os campos para prosseguir.")
    } else {
        exibeResultado();
    }
}

function calculaPontos() {
    const vitorias = document.getElementById('vitorias').value;
    const empates = document.getElementById('empates').value;

    const pontosVitorias = parseInt(vitorias*3);
    const pontosEmpates = parseInt(empates);
    const pontosTotal = pontosVitorias + pontosEmpates;

    return pontosTotal
}

function exibeResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Total: " + calculaPontos();
}