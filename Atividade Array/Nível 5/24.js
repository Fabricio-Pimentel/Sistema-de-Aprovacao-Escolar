let notas = [8.5, 6.0, 7.0, 5.5, 9.2, 4.0];
let contadorNotasBoas = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        contadorNotasBoas = contadorNotasBoas + 1;
    }
}

console.log("Quantidade de notas boas: " + contadorNotasBoas);