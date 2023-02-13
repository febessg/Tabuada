var desejaContinuar;


do {
    let contador = 1;
    let number = window.prompt("Digite um número de 1 a 9");
if (number > 0 && number < 10) {
    while (contador <10) {
    console.log(number * contador)
    contador ++
    }  
    desejaContinuar = window.prompt("Deseja continuar? [sim/nao]");
} else {
   alert("Número inválido.")
}

} while (desejaContinuar === "sim")