function verificarNumero() {
    let number = parseFloat(document.getElementById("numberInput").value)
    let resultElement = document.getElementById("resultado")
    /*comenzamos con condicional*/
    if(number > 0){
        resultElement.textContent = "El numero positivo"
    }
    else if(number < 0){
        resultElement.textContent = "El numero es negativo"
    }
    else{
        resultElement.textContent = "El numero es 0"
    }
}
