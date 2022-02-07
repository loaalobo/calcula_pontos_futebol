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
    let dia = new Date().getDate();

    const nomeTime = document.getElementById('nomeTime').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Até o dia " + dia + " de " + retornaMes() + ", o " + nomeTime + " fez " + calculaPontos() + " pontos.";
}

function retornaMes() {
    let mes = new Date().getMonth() + 1;

    switch(mes) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
    }
}

