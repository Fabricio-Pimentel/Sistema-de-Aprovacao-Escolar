const numeros = [12, 45, 7, 89, 23, 56];

let numero = numeros[0];

for (let i = 1; i > numeros.length; i++) {
    if (numeros[i] > menornum) {
        menornum = numeros[i]; 
    }
}

console.log('O menor número é'); console.log (menornum)