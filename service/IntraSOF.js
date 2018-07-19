class IntraSOF{

    constructor(app){
        this._app = app;
    }

    
    buscar(termoABuscar) { 
        return this.buscarREST(termoABuscar);
    }

    async buscarREST(termoABuscar){        
        let Client = require('node-rest-client').Client;
        let client = new Client({connection: {rejectUnauthorized: false}});
        var args = {
            parameters: { q: termoABuscar, scope: "pages", prettyNames: "true", media: "json"},            
        };
        let paginas = [];

        await this._clientGet(client, paginas, "https://intrasof/wiki/rest/wikis/xwiki/search", args);

        return paginas;
    }

    _clientGet(client, paginas, url, args){
        return new Promise((resolve, reject) =>{
            client.get("https://intrasof/wiki/rest/wikis/xwiki/search", args, (data, response) => {
                resolve( 
                    data.searchResults.forEach((resultado) => {
                        let msg = resultado.title + "\n";                        
                        resultado.links.forEach((link) => {
                            msg += link.href + + "\n";
                        });
                        paginas.push(msg);
                    }));     
                }
            );    
        });
    }
        

    async buscarHTML(termoABuscar) { 
        var options = {
            url: "http://intrasof/wiki/bin/Main/Search",
            qs: {text: termoABuscar},
            connection: {
                rejectUnauthorized: false
            }
        };
        var request = require("request-promise");
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";   
        let paginas = [];     
        await request(options, (error, response, body) => {
            if (error){
                console.log(error);
            }
            else{
                paginas = this._app.service.ParserHTML.obterPaginas(body);
            }
        });
        return paginas;
    }
}

module.exports = (app) => {
    return new IntraSOF(app);
}


