const notas = [8, 5, 7.5, 4, 10, 5.8];

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    
    if (nota >= 6) {
        console.log("Nota " + nota + ": Aprovado");
    } else {
        console.log("Nota " + nota + ": Reprovado");
    }
}
