function verificarValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (chuteMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre 
        ${menorValor} e ${maiorValor}</div>
        `
        return
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto é ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }    
}

function chuteInvalido(numero) {
    if (chute.toUpperCase() === "GAME OVER") {

        document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div>Resposta errada</div>';
    }
}

function chuteMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
