function iniciaGrafo() {
    let grafo = new Grafo();
    let rioSul          = grafo.addVertice(1, 'Rio do Sul');
    let lontras         = grafo.addVertice(2, 'Lontras');
    let presNereu       = grafo.addVertice(3, 'Presidente Nereu');
    let agronomica      = grafo.addVertice(4, 'Agronômica');
    let laurentino      = grafo.addVertice(5, 'Laurentino');
    let agrolandia      = grafo.addVertice(6, 'Agrolândia');
    let atalanta        = grafo.addVertice(7, 'Atalanta');
    let bracoTrombudo   = grafo.addVertice(8, 'Braço do Trombudo');
    let tromCentral     = grafo.addVertice(9, 'Trombudo Central');
    let ibirama         = grafo.addVertice(10, 'Ibirama');
    let joseBoiteux     = grafo.addVertice(11, 'José Boiteux');
    let witmarsun       = grafo.addVertice(12, 'Witmarsun');
    let presGetulio     = grafo.addVertice(13, 'Presidente Getúlio');
    let donaEma         = grafo.addVertice(14, 'Dona Ema');
    let vitorMeireles   = grafo.addVertice(15, 'Vitor Meireles');
    let rioOeste        = grafo.addVertice(16, 'Rio do Oeste');
    let taio            = grafo.addVertice(17, 'Taio');
    let salete          = grafo.addVertice(18, 'Salete');
    let mirimDoce       = grafo.addVertice(19, 'Mirim Doce');
    let santaTerezinha  = grafo.addVertice(20, 'Santa Terezinha');
    let rioCampo        = grafo.addVertice(21, 'Rio do Campo');
    let pousoRedondo    = grafo.addVertice(22, 'Pouso Redondo');
    let ituporanga      = grafo.addVertice(23, 'Ituporanga');
    let aurora          = grafo.addVertice(24, 'Aurora');
    let imbuia          = grafo.addVertice(25, 'Imbuia');
    let vidalRamos      = grafo.addVertice(26, 'Vidal Ramos');
    let petrolandia     = grafo.addVertice(27, 'Petrolândia');
    let chapLageado     = grafo.addVertice(28, 'Chapadão do Lageado');

    salete.addAresta('E1', rioCampo, 19,5);
    santaTerezinha.addAresta('E2', vitorMeireles, 10);
    rioCampo.addAresta('E3', salete, 10);
    vitorMeireles.addAresta('E4', joseBoiteux, 10);
    taio.addAresta('E5', rioCampo, 10);
    witmarsun.addAresta('E6', vitorMeireles, 10);
    taio.addAresta('E7', mirimDoce, 10);
    taio.addAresta('E8', rioOeste, 10);
    mirimDoce.addAresta('E9', pousoRedondo, 10);
    taio.addAresta('E10', pousoRedondo, 10);
    rioOeste.addAresta('E11', pousoRedondo, 10);
    witmarsun.addAresta('E12', donaEma, 10);
    joseBoiteux.addAresta('E13', donaEma, 10);
    joseBoiteux.addAresta('E14', ibirama, 10);
    ibirama.addAresta('E15', lontras, 10);
    donaEma.addAresta('E16', presGetulio, 10);
    presGetulio.addAresta('E17', laurentino, 10);
    lontras.addAresta('E18', presNereu, 10);
    aurora.addAresta('E19', lontras, 10);
    rioSul.addAresta('E20', lontras, 10);
    rioSul.addAresta('E21', presGetulio, 10);
    rioSul.addAresta('E22', agronomica, 10);
    agronomica.addAresta('E23', aurora, 10);
    agronomica.addAresta('E24', atalanta, 10);
    tromCentral.addAresta('E25', pousoRedondo, 10);
    bracoTrombudo.addAresta('E26', pousoRedondo, 10);
    atalanta.addAresta('E27', pousoRedondo, 10);
    presNereu.addAresta('E28', aurora, 10);
    aurora.addAresta('E29', imbuia, 10);
    ituporanga.addAresta('E30', vidalRamos, 10);
    aurora.addAresta('E31', vidalRamos, 10);
    ituporanga.addAresta('E32', aurora, 10);
    ituporanga.addAresta('E33', imbuia, 10);
    ituporanga.addAresta('E34', chapLageado, 10);
    petrolandia.addAresta('E35', chapLageado, 10);
    agronomica.addAresta('E36', laurentino, 10);
    atalanta.addAresta('E37', ituporanga, 10);
    atalanta.addAresta('E38', petrolandia, 10);
    agrolandia.addAresta('E39', petrolandia, 10);
    agrolandia.addAresta('E40', atalanta, 10);
    atalanta.addAresta('E41', aurora, 10);
    rioSul.addAresta('E42', aurora, 10);
    salete.addAresta('E43', taio, 10);
    donaEma.addAresta('E44', lontras, 10);
    witmarsun.addAresta('E45', salete, 10);
    witmarsun.addAresta('E46', joseBoiteux, 10);

    return grafo;
}

function onLoadDijkstra() {
    let grafo = iniciaGrafo();
    let cidadeInicial = document.getElementById('cidadeInicio');
    let cidadeFinal = document.getElementById('cidadeFim');
    let vertices = grafo.vertices;

    for (let i = 0; i < vertices.length; i++) {
        let optionCidadeInicial = new Option(vertices[i].rotulo, vertices[i].id);
        cidadeInicial.options.add(optionCidadeInicial);

        let optionCidadeFinal = new Option(vertices[i].rotulo, vertices[i].id);
        cidadeFinal.options.add(optionCidadeFinal);
    }
}

/**
 * Calcula a distância mínima entre dois pontos
 */
function calculaDistanciaMinima() {
    

    let cidadeInicio = document.getElementById('cidadeInicio');
    let cidadeFim = document.getElementById('cidadeFim');
    
    let grafo = this.iniciaGrafo();
    let idVerticeInicio = cidadeInicio.value;
    let idVerticeFinal = cidadeFim.value;

    if (idVerticeInicio == 'default' || idVerticeFinal == 'default') {
      debugger
        Swal.fire({
            icon: "Error",
            title: "Oops...",
            text: "Precisa informar ambos os campos, Inicio Destino e Fim Destino!",
        });
        return
    }

    if (idVerticeFinal == idVerticeInicio) {
        Swal.fire({
            icon: "info",
            text: "O custo para os parametros é igual a 0!",
        }); 
        return   
    }

    grafo.calculaDistanciaMinima(idVerticeInicio, idVerticeFinal);
}
