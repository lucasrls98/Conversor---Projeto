var categoriaSelecao = document.querySelector("#categoria")
var unidadeOrigemSelecao = document.querySelector("#unidade-origem")
var unidadeDestinoSelecao = document.querySelector("#unidade-destino")

// função para preencher opções de origem e destino diante da categoria selecionada 

function preencherOpcoes(options) {
    unidadeOrigemSelecao.innerHTML = ""
    unidadeDestinoSelecao.innerHTML = ""

    options.paraCada(function (option) {
        var optionElement = document.createElement("option")
        optionElement.value = option
        optionElement.textContent = option

        unidadeOrigemSelecao.appendChild(optionElement)
        unidadeDestinoSelecao.appendChild(optionElement.cloneNode(true))
    })
}

// adicionando o evento 

categoriaSelecao.addEventListener("change", function () {
    var categoria = categoriaSelecao.value

    if (categoria === "comprimento") {
        preencherOpcoes(["Metro (m)", "Centímetros (cm)", "Polegadas (in)"])
    }
    else if (categoria === "peso") {
        preencherOpcoes(["Quilogramas (kg)', 'Gramas (g)', 'Libras (lb)"])
    }
    else if (categoria === 'temperatura') {
        populateOptions(["Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (°K)"]);
    }
})

// botão de converter 
var converterBotao = document.querySelector("#botao-converter")

// obter informações das opções selecionadas 
converterBotao.addEventListener("click", function () {
    // obter os valores digitados e também os selecionados 
    var valor = document.querySelector("#valor").value
    var categoria = categoriaSelecao.value
    var unidadeOrigem = unidadeOrigemSelecao.value
    var unidadeDestino = unidadeDestinoSelecao.value

    // Realizar a conversão 
    var resultado = realizarConversao(valor, categoria, unidadeOrigem, unidadeDestino)

    // Exibição do resultado na caixa de texto 
    document.querySelector("#resultado").value = resultado
})

// Adicionar evento para a tecla Enter pressionada em qualquer lugar selecionado da tela para converter
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Disparar o evento de clique no botão Converter
        converterBotao.click();
    }
})



