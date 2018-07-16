class ParserHTML{

    async obterPaginas(html){
        var htmlparser = require("htmlparser2");
        var select = require('soupselect').select;
        var linksFinais = [];
        var handler = await new htmlparser.DomHandler(
            function (error, dom) {
                if (error){

                }    	    
                else{
                    var elementosResultantesDaBusca = select(dom, '.search-result-title');
                    var linksDosElementos = select(elementosResultantesDaBusca, 'a');
                    linksDosElementos.forEach((linkDosElementos) => {
                        linksFinais.push('https://intrasof/' + linkDosElementos.attribs['href']);
                    });
                    return linksFinais;
                }
        });
        var parser = await new htmlparser.Parser(handler);        
        parser.write(html);
        await parser.end();
        return linksFinais;
    }   



}

module.exports = () => {
    return new ParserHTML();
}

/*let html = "<html></html>";

let parser = new ParserHTML();
parser.obterPaginas(html);*/