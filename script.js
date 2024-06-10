var idade;


function calcular() {
    idade= parseFloat(formulario.idade.value);
    

    if (idade < 18 || idade >= 70 ) {
        document.getElementById('status').src="./imgs/nao.png" ;
    } else  { 
        document.getElementById('status').src="./imgs/sim.png";
    }
}

function limpar() {
    document.getElementById('status').src="./imgs/tituloeleitor.jpg";
}