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
    santaTerezinha.addAresta('E2', vitorMeireles, 8,75);
    rioCampo.addAresta('E3', salete, 26);
    vitorMeireles.addAresta('E4', joseBoiteux, 16,25);
    taio.addAresta('E5', rioCampo, 14);
    witmarsun.addAresta('E6', vitorMeireles, 7,5);
    taio.addAresta('E7', mirimDoce, 8,12);
    taio.addAresta('E8', rioOeste, 18);
    mirimDoce.addAresta('E9', pousoRedondo, 18);
    taio.addAresta('E10', pousoRedondo, 7);
    rioOeste.addAresta('E11', pousoRedondo, 12);
    witmarsun.addAresta('E12', donaEma, 6,25);
    joseBoiteux.addAresta('E13', donaEma, 18);
    joseBoiteux.addAresta('E14', ibirama, 15);
    ibirama.addAresta('E15', lontras, 19);
    donaEma.addAresta('E16', presGetulio, 9,75);
    presGetulio.addAresta('E17', laurentino, 20,1);
    lontras.addAresta('E18', presNereu, 17);
    aurora.addAresta('E19', lontras, 8,75);
    rioSul.addAresta('E20', lontras, 15,75);
    rioSul.addAresta('E21', presGetulio, 14);
    rioSul.addAresta('E22', agronomica, 12,5);
    agronomica.addAresta('E23', aurora, 7);
    agronomica.addAresta('E24', atalanta, 26);
    tromCentral.addAresta('E25', pousoRedondo, 8);
    bracoTrombudo.addAresta('E26', pousoRedondo, 6,25);
    atalanta.addAresta('E27', pousoRedondo, 16);
    presNereu.addAresta('E28', aurora, 21,12);
    aurora.addAresta('E29', imbuia, 12);
    ituporanga.addAresta('E30', vidalRamos, 10);
    aurora.addAresta('E31', vidalRamos, 15);
    ituporanga.addAresta('E32', aurora, 6);
    ituporanga.addAresta('E33', imbuia, 28,73);
    ituporanga.addAresta('E34', chapLageado, 16,25);
    petrolandia.addAresta('E35', chapLageado, 14,3);
    agronomica.addAresta('E36', laurentino, 6,25);
    atalanta.addAresta('E37', ituporanga, 11,25);
    atalanta.addAresta('E38', petrolandia, 6,25);
    agrolandia.addAresta('E39', petrolandia, 8,12);
    agrolandia.addAresta('E40', atalanta, 24,48);
    atalanta.addAresta('E41', aurora, 7,5);
    rioSul.addAresta('E42', aurora, 19,5);
    salete.addAresta('E43', taio, 8);
    donaEma.addAresta('E44', lontras, 12,5);
    witmarsun.addAresta('E45', salete, 18,75);
    witmarsun.addAresta('E46', joseBoiteux, 11,25);

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


