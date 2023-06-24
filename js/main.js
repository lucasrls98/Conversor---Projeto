var categoriaSelecao = document.querySelector("#categoria")
var unidadeOrigemSelecao = document.querySelector("#unidade-origem")
var unidadeDestinoSelecao = document.querySelector("#unidade-destino")


function preencherOpcoes(options){
    unidadeOrigemSelecao.innerHTML = ""
    unidadeDestinoSelecao.innerHTML = ""

    options.paraCada(function(option){
        var optionElement = document.createElement("option")
        optionElement.value = option
        optionElement.textContent = option
        
        unidadeOrigemSelecao.appendChild(optionElement)
        unidadeDestinoSelecao.appendChild(optionElement.cloneNode(true))
    })
}

categoriaSelecao.addEventListener("change", function(){
    var categoria = categoriaSelecao.value

    if(categoria === "comprimento"){
        
    }
})