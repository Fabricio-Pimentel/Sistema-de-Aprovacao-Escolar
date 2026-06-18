let nota = [10, 6 , 8, 7]
let soma = 0

console.log ("Temos essas notas:")
console. log (nota)
console.log ("A média é:")

for (let i = 0; i < nota.length; i++) {
    soma += nota[i];
}

let media = soma / nota.length

console.log (media)
