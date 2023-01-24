const divs = document.querySelectorAll("div");
let score = document.querySelector("#score");
const time = document.querySelector("#time");
let pontos = 0;
let tempo = 60;
let intervalo = 500;//intervalo entre cada mudança de lugar em milissegundos;

divs.forEach(div => div.addEventListener("mousedown", testando, true))

//retornar numeros aleatórios de 0 a 8;
function numAleatorio() {
    return Math.floor(Math.random() * 15);
}


function alteraPosicao() {

    if (document.querySelector(".rato")) {
        document.querySelector(".rato").classList.remove("rato")

    }

    divs[numAleatorio()].classList.add("rato")

}

function testando(item) {
    if (item.srcElement.classList.contains("rato")) {
        pontos++;
        score.innerHTML = pontos;
    }

}

let relogio = setInterval(() => {
    tempo--; time.innerHTML = tempo

    if (tempo === 0) {
        pararRelogio();
    }

}, 1000);

function pararRelogio() {
    clearInterval(relogio);
    alert(`Fim de jogo!!!\nVocê marcou ${pontos} pontos`)
    window.location.reload()
}

clearTimeout
setInterval(alteraPosicao, intervalo)