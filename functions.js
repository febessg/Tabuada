let number;

let contador = 1;

let desejaContinuar

do {
number = window.prompt("Digite um número de 1 a 9")
if (number > 0 && number < 10) {
    while (contador <10) {
    console.log(number * contador)
    contador ++
    }
    desejaContinuar = window.prompt("Deseja continuar? [sim/nao]")
} else {
   window.prompt("Número inválido.")
}

} while (desejaContinuar === "sim")