var titulo = document.querySelector(".titulo");

var paciente = document.querySelector(".paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("peso invalido!")
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido!";
}

if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Invalida!")
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida!";
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




