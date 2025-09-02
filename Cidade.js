class Cidade {

    constructor(id, rotulo) {
        this.id = id;
        this.rotulo = rotulo;
        this.arestas = [];
    }

    addAresta(rotuloAresta, cidade, custo) {
        let aresta = new Aresta(rotuloAresta, this, cidade, custo);
        this.arestas.push(aresta);
    }
}
