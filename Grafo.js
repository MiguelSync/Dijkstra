class Grafo {

    constructor(){
        this.vertices = [];
    }

    addVertice(id, rotulo) {
        let cidade = new Cidade(id, rotulo);
        this.vertices.push(cidade);
        return cidade;
    }
}
