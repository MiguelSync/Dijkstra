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

    /**
     * Retorna a aresta a partir da cidade de destino
     * @param {integer} cidadeDestino 
     * @returns {Aresta|false}
     */
    getArestaByCidadeDestino(cidadeDestino) {
        let arestas = this.arestas;
        let arestaDesejada = false;

        for (let i = 0; i < arestas.length; i++) {
            if (arestas[i].cidadeDestino = cidadeDestino) {
                arestaDesejada = arestas[i];   
            }
        }

        return arestaDesejada;
    }
}
