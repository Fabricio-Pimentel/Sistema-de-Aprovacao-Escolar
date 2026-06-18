let tarefas = ["Estudar JavaScript", "Ir à academia", "Almoçar", "Trabalhar", "Ler um livro"];

console.log("Minhas tarefas iniciais:");
for (let i = 0; i < tarefas.length; i++) {
    console.log("- " + tarefas[i]);
}

tarefas.push("Lavar a louça");

console.log("Minhas tarefas atualizadas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log("- " + tarefas[i]);
}