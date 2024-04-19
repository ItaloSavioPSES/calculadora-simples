var nu1 = document.querySelector("#nu1")

var nu2 = document.querySelector("#nu2")

var resultado = document.querySelector(`span`)

function somar() {
    resultado.innerHTML = parseInt(nu1.value) + parseInt(nu2.value);
}

function divisao() {
    resultado.innerHTML = parseFloat(nu1.value) / parseFloat(nu2.value)
}

function multiplicacao() {
    resultado.innerHTML = parseFloat(nu1.value) *
    parseFloat(nu2.value)
}

function subtracao() {
    resultado.innerHTML = parseFloat(nu1.value) - parseFloat(nu2.value)
}