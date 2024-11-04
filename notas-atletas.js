function calcularMedia(atletas) {
    return atletas.map(atleta => {
        // Ordena as notas
        const notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
        
        // Remove a maior e a menor nota
        const notasFiltradas = notasOrdenadas.slice(1, 4); // Pega do segundo ao quarto elemento
        
        // Calcula a média
        const somaNotas = notasFiltradas.reduce((acc, nota) => acc + nota, 0);
        const media = somaNotas / notasFiltradas.length;

        return {
            nome: atleta.nome,
            notas: atleta.notas,
            media: media.toFixed(2) // Formata a média com duas casas decimais
        };
    });
}

// Exemplo de uso
const atletas = [
    { nome: "Alice", notas: [8, 9, 7, 10, 6] },
    { nome: "Bob", notas: [6, 5, 8, 7, 9] },
    { nome: "Carlos", notas: [10, 10, 9, 8, 7] },
];

// Calcula as médias
const resultados = calcularMedia(atletas);

// Apresenta os resultados ao usuário
resultados.forEach(atleta => {
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas: ${atleta.notas.join(", ")}`);
    console.log(`Média: ${atleta.media}`);
    console.log('-----------------------');
});
