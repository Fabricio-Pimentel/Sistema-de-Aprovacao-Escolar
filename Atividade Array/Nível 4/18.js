const numeros = [12, 45, 7, 89, 23, 56];


let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]; 
    }
}

console.log('O maior número é:') + console.log (maiorNumero);