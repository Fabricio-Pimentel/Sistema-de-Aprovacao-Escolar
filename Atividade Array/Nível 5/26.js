let produtos = ["Pastel", "Suco", "Pipoca", "Chocolate", "Pão de Queijo"];

console.log("Lista inicial de produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log("- " + produtos[i]);
}

produtos.push("Coxinha");

produtos.shift();

produtos[1] = "Suco de Laranja";

console.log("Lista atualizada de produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log("- " + produtos[i]);
}

console.log("Quantidade final de produtos: " + produtos.length);

let encontrado = false;
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] == "Coxinha") {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Produto encontrado!");
} else {
    console.log("Produto não encontrado.");
}