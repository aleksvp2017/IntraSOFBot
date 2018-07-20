class ParserHTML{

    obterPaginas(html){
        var htmlparser = require("htmlparser2");
        var select = require('soupselect').select;
        var linksFinais = [];
        var handler = new htmlparser.DomHandler(
            function (error, dom) {
                if (error){

                }    	    
                else{
                    var elementosResultantesDaBusca = select(dom, '.search-result-title');
                    var linksDosElementos = select(elementosResultantesDaBusca, 'a');
                    linksDosElementos.forEach((linkDosElementos) => {
                        linksFinais.push(URLBASEBUSCAHTML + linkDosElementos.attribs['href']);
                    });
                    var currentPage = select(dom, '.currentPage');
                    var proximasPaginas = select(elementosResultantesDaBusca, 'a');
                    if (proximasPaginas){

                    }

                    return linksFinais;
                }
        });
        var parser = new htmlparser.Parser(handler);        
        parser.write(html);
        parser.end();
        return linksFinais;
    }   



}

module.exports = () => {
    return new ParserHTML();
}
