let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let soma = document.getElementById("soma");

function calcular() {
    let valor1 = Number(in1.value);
    let valor2 = Number(in2.value);

    let resultado = valor1 + valor2;

    soma.textContent = resultado;
}

in1.addEventListener("input", calcular);
in2.addEventListener("input", calcular);
