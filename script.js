// André Pereira

var Iniciar = () => {

    document.getElementById("container-init").style.display = "none";
    document.getElementById("container-calc").style.display = "flex";

    BtnNovo()
}

var Consultar = () => {

    var campoAlcool = document.getElementById("alcool").value
    var campoGasolina = document.getElementById("gasolina").value
    var resultModal = document.getElementById("resultado")
    
    var total = campoAlcool / campoGasolina

    if( total < 0.7 ){
        resultModal.innerHTML = "Nesse caso, é mais vantagem você utilizar o Álcool."
    }
    else if(total > 0.7 ){
        resultModal.innerHTML = "A gasolina está sendo mais vantajosa."
    }
    else{
        resultModal.innerHTML =  "Tanto faz álcool ou gasolina"
    }

}

var BtnNovo = () => {
   document.getElementById("alcool").value = ""
   document.getElementById("gasolina").value = ""
}

var BtnFechar = () => {

    document.getElementById("container-init").style.display = "flex";
    document.getElementById("container-calc").style.display = "none";
}