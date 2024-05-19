const calcularTotal = (ferramentas, comprar) => {
    let valorFerramentas = 0.00;
    
    if (ferramentas.length < 1 || comprar.length < 1) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }
    else
    for (let i = 0; i < comprar.length; i++) {
        //const itemCompra = comprar[i];
        const opcaoDesejada = ferramentas.find(opcaoDesejada => opcaoDesejada.nome === comprar[i]);
        if (opcaoDesejada) {
            valorFerramentas += opcaoDesejada.preco;
        }
        if (valorFerramentas === 0) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }
    }

    return (`O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${valorFerramentas.toFixed(2)}`);
}

module.exports = {
    calcularTotal
}