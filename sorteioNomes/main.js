const btnSortear = document.querySelector(".sortear"),
    textarea = document.querySelector("textarea"),
    tagResultado = document.querySelector(".resultado p"),
    popUpResultado = document.querySelector(".resultado")

function pegarDados() {
    const valorCampo = textarea.value,
        listaNomes = valorCampo.split(","),
        tamanhoArray = listaNomes.length,
        posicaoNome = gerarNomeAleatoro(tamanhoArray),
        nome = listaNomes[posicaoNome]
        
    mostrarResultado(nome)
    // textarea.value = ""
}
btnSortear.addEventListener('click', pegarDados)

function gerarNomeAleatoro(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0)
}
function mostrarResultado(nome) {
    tagResultado.innerHTML = `resultado: ${nome}`
    popUpResultado.classList.add('mostrarResultado')
}