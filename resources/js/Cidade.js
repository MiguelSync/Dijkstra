class Cidade {

    constructor(id, rotulo) {
        this.id = id;
        this.rotulo = rotulo;
        this.arestas = [];
    }

    /**
     * Adiciona uma nova aresta para a cidade
     * @param {string} rotuloAresta 
     * @param {Cidade} cidade 
     * @param {float} custo 
     */
    addAresta(rotuloAresta, cidade, custo) {
        let aresta = new Aresta(rotuloAresta, cidade, custo);
        this.arestas.push(aresta);

        aresta = new Aresta(rotuloAresta, this, custo);
        cidade.arestas.push(aresta);
    }
}
