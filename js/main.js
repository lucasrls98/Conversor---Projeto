var categoriaSelecao = document.querySelector("#categoria")
var unidadeOrigemSelecao = document.querySelector("#unidade-origem")
var unidadeDestinoSelecao = document.querySelector("#unidade-destino")

// função para preencher opções de origem e destino diante da categoria selecionada 

function preencherOpcoes(options) {
    unidadeOrigemSelecao.innerHTML = ""
    unidadeDestinoSelecao.innerHTML = ""

    options.forEach(function (option) {
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
        preencherOpcoes(["Metro (m)", "Centímetros (cm)", "Polegadas (in)"]);
    } else if (categoria === "peso") {
        preencherOpcoes(["Quilogramas (kg)", "Gramas (g)", "Libras (lb)"]);
    } else if (categoria === 'temperatura') {
        preencherOpcoes(["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (°K)"]);
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
    document.querySelector("#area-resultado").value = resultado
})

// Adicionar evento para a tecla Enter pressionada em qualquer lugar selecionado da tela para converter
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Disparar o evento de clique no botão Converter
        converterBotao.click();
    }
})

// funçao para realizar a conversão de medidas 
function realizarConversao(valor, categoria, unidadeOrigem, unidadeDestino) {
    if (unidadeOrigem === unidadeDestino) {
        return parseFloat(valor);
    }

    // CONVERSÕES DE MASSA/PESO 
    if (categoria === 'peso') {
        if (unidadeOrigem === 'Quilogramas (kg)' && unidadeDestino === 'Gramas (g)') {
            return (valor * 1000).toFixed(4);
        } else if (unidadeOrigem === 'Gramas (g)' && unidadeDestino === 'Quilogramas (kg)') {
            return (valor / 1000).toFixed(4);
        } else if (unidadeOrigem === 'Libras (lb)' && unidadeDestino === 'Quilogramas (kg)') {
            return (valor * 0.453592).toFixed(4);
        } else if (unidadeOrigem === 'Quilogramas (kg)' && unidadeDestino === 'Libras (lb)') {
            return (valor * 2.20462).toFixed(4);
        } else if (unidadeOrigem === 'Gramas (g)' && unidadeDestino === 'Libras (lb)') {
            return (valor / 453.592).toFixed(4);
        } else if (unidadeOrigem === 'Libras (lb)' && unidadeDestino === 'Gramas (g)') {
            return (valor * 453.592).toFixed(4);
        }

        // CONVERSÕES DE COMPRIMENTO 
    } else if (categoria === 'comprimento') {
        if (unidadeOrigem === 'Metro (m)' && unidadeDestino === 'Centímetros (cm)') {
            return (valor * 100).toFixed(4);
        } else if (unidadeOrigem === 'Centímetros (cm)' && unidadeDestino === 'Metro (m)') {
            return (valor / 100).toFixed(4);
        } else if (unidadeOrigem === 'Polegadas (in)' && unidadeDestino === 'Centímetros (cm)') {
            return (valor * 2.54).toFixed(4);
        } else if (unidadeOrigem === 'Centímetros (cm)' && unidadeDestino === 'Polegadas (in)') {
            return (valor / 2.54).toFixed(4);
        } else if (unidadeOrigem === 'Metro (m)' && unidadeDestino === 'Polegadas (in)') {
            return (valor * 39.37).toFixed(4);
        } else if (unidadeOrigem === 'Polegadas (in)' && unidadeDestino === 'Metro (m)') {
            return (valor / 39.37).toFixed(4);
        }

        // CONVERSÕES DE TEMPERATURA 
    } else if (categoria === 'temperatura') {
        if (unidadeOrigem === 'Celsius (°C)' && unidadeDestino === 'Fahrenheit (°F)') {
            return ((valor * 9 / 5) + 32).toFixed(4);
        } else if (unidadeOrigem === 'Fahrenheit (°F)' && unidadeDestino === 'Celsius (°C)') {
            return ((valor - 32) * 5 / 9).toFixed(4);
        } else if (unidadeOrigem === 'Celsius (°C)' && unidadeDestino === 'Kelvin (°K)') {
            return (parseFloat(valor) + 273.15).toFixed(4);
        } else if (unidadeOrigem === 'Kelvin (°K)' && unidadeDestino === 'Celsius (°C)') {
            return (parseFloat(valor) - 273.15).toFixed(4);
        } else if (unidadeOrigem === 'Fahrenheit (°F)' && unidadeDestino === 'Kelvin (°K)') {
            return ((parseFloat(valor) + 459.67) * 5 / 9).toFixed(4);
        } else if (unidadeOrigem === 'Kelvin (°K)' && unidadeDestino === 'Fahrenheit (°F)') {
            return ((parseFloat(valor) * 9 / 5) - 459.67).toFixed(4);
        }
    }

    // Caso não seja uma conversão válida
    return "Conversão inválida";
}



