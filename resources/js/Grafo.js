class Grafo {

    constructor(){
        this.vertices = [];
    }

    /**
     * Adiciona um novo vértice ao grafo
     * @param {integer} id 
     * @param {string} rotulo 
     * @returns {Cidade}
     */
    addVertice(id, rotulo) {
        let cidade = new Cidade(id, rotulo);
        this.vertices.push(cidade);
        return cidade;
    }

    /**
     * Retorna um vértice a partir do seu ID
     * @param {integer} id 
     * @returns {Cidade}
     */
    getVerticeById(id) {
        let vertices = this.vertices;
        let vertice = null;
        let i;
        
        for (i in vertices) {
            if (vertices[i].id == id) {
                vertice = vertices[i];
            }
        }

        return vertice;
    }

    /**
     * Calcula a distância mínima entre dois pontos
     * @param {integer} idVerticeInicio 
     * @param {integer} idVerticeFinal 
     * @returns 
     */
    calculaDistanciaMinima(idVerticeInicio, idVerticeFinal) {
        let vertices = this.vertices;
        let distancias = {}
        let pais = [];
        let visitados = [];
        let i;

        for (i in vertices) {
            distancias[vertices[i].id] = Infinity;
        }

        distancias[idVerticeInicio] = 0;
        let cidadeAtual = this.getVerticeById(idVerticeInicio);
        visitados.push(idVerticeInicio);

        while (cidadeAtual.id != idVerticeFinal) {
            let vizinhos = cidadeAtual.arestas;
            let distanciaAtual = distancias[cidadeAtual.id];

            for (let i = 0; i < vizinhos.length; i++) {
                let aresta = vizinhos[i];
                let cidadeDestino = aresta.cidadeDestino;
                let novaDistancia = distanciaAtual + aresta.custo;

                if (novaDistancia < distancias[cidadeDestino.id]) {
                    distancias[cidadeDestino.id] = novaDistancia;
                    pais[cidadeDestino.id] = cidadeAtual.id;
                }

            }

            cidadeAtual = this.getProximaCidadeComMenorCustoNaoVisitada(distancias, visitados);
            visitados.push(cidadeAtual.id);
        }

        let caminho = idVerticeFinal;
        let path = [];

        for (i in pais) {
            path[i] = pais[caminho] + ' -> ' + caminho + ' Custo (' + distancias[caminho] + ')';
            caminho = pais[caminho];
        }

        return path;
    }

    /**
     * Retorna a próxima cidade que tem o menor custo e ainda não foi visitada
     * @param {object} distancias 
     * @param {array} visitados 
     */
    getProximaCidadeComMenorCustoNaoVisitada(distancias, visitados) {
        let bkpDistancias = {};
        let i;

        for (i in distancias) {
            bkpDistancias[i] = distancias[i];
        }

        for (i in visitados) {
            bkpDistancias[visitados[i]] = Infinity;
        }

        let idCidades = Object.keys(bkpDistancias);
        let proximaCidade = idCidades[0];
        let menorCusto = Infinity;

        for (i in bkpDistancias) {
            if (bkpDistancias[i] < menorCusto) {
                proximaCidade = i;
                menorCusto = bkpDistancias[i];
            }
        }

        return this.getVerticeById(proximaCidade);
    }
}
