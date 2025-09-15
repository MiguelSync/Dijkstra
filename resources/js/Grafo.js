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
     * @returns {array}
     */
    calculaDistanciaMinima(idVerticeInicio, idVerticeFinal) {
        let vertices = this.vertices;
        let distancias = {}
        let pais = [];
        let visitados = [];
        let i;
        let elementoVerticesResultado = document.getElementById('resumo-container');
        let elementosResultadoAtual = elementoVerticesResultado.children;

        while (elementosResultadoAtual.length > 0) {
            elementoVerticesResultado.removeChild(elementosResultadoAtual[0]);
        }

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

                if (visitados.includes(cidadeDestino.id)) {
                    continue;
                }

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
        while (caminho != idVerticeInicio) {
            let vertice = this.getVerticeById(caminho);
            let elementoVertice = this.criaElementoVertice(vertice);
            path.push(elementoVertice);

            // Se não tiver vértice pai, não cria a seta
            if (pais[caminho] == undefined) {
                continue;
            }

            let aresta = vertice.getArestaByCidadeDestino(pais[caminho]);
            let elementoAresta = this.criaElementoSeta(aresta);
            path.push(elementoAresta);
            caminho = pais[caminho];
        }

        let vertice = this.getVerticeById(idVerticeInicio);
        let elementoVertice = this.criaElementoVertice(vertice);
        path.push(elementoVertice);

        path = path.reverse();
        
        for (i in path) {
            elementoVerticesResultado.appendChild(path[i]);
        }
    }

    /**
     * Retorna a próxima cidade que tem o menor custo e ainda não foi visitada
     * @param {object} distancias 
     * @param {array} visitados 
     */
    getProximaCidadeComMenorCustoNaoVisitada(distancias, visitados) {
        let bkpDistancias = {};
        let i = 1;

        for (i in distancias) {
            bkpDistancias[i] = distancias[i];
        }

        i = 0;

        for (i in visitados) {
            bkpDistancias[visitados[i]] = Infinity;
        }

        let idCidades = Object.keys(bkpDistancias);
        let proximaCidade = idCidades[0];
        let menorCusto = Infinity;

        i = 1;

        for (i in bkpDistancias) {
            if (bkpDistancias[i] < menorCusto) {
                proximaCidade = i;
                menorCusto = bkpDistancias[i];
            }
        }

        return this.getVerticeById(proximaCidade);
    }

    /**
     * Cria um novo elemento de vértice para ser exibido como resultado
     * @param {Cidade} vertice 
     * @return {span}
     */
    criaElementoVertice(vertice) {
        let elementoVertice = document.createElement('span');
        elementoVertice.classList.add('vertice');
        elementoVertice.innerHTML = vertice.rotulo;
        return elementoVertice;
    }

    /**
     * Cria um novo elemento de seta para ser exibido como resultado
     * @param {Aresta} aresta
     * @return {span}
     */
    criaElementoSeta(aresta) {
        let elementoSeta = document.createElement('span');
        elementoSeta.classList.add('setaResultado');
        let conteudo = aresta.rotulo + '(' + aresta.custo + ')';
        elementoSeta.innerHTML = conteudo;
        return elementoSeta;
    }
}
