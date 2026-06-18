let notas = [8.5, 7, 5.5, 9, 6.5];
let temNotaBaixa = false;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        temNotaBaixa = true;
        break;
    }
}

if (temNotaBaixa) {
    console.log("Existe nota abaixo da média.");
} else {
    console.log("Todas as notas estão boas.");
}