class IntraSOF{

    constructor(app){
        this._app = app;
    }

    

    async buscar(termoABuscar) { 
        var options = {
            url: "http://intrasof/wiki/bin/Main/Search",
            qs: {text: termoABuscar},
            connection: {
                rejectUnauthorized: false
            }
        };
        console.log("Procurando por:" + termoABuscar);
        var request = require("request-promise");
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";   
        let paginas = [];     
        await request(options, async (error, response, body) => {
            if (error){
                console.log(error);
            }
            else{
                paginas = await this._app.service.ParserHTML.obterPaginas(body);
            }
        });
        return paginas;
    }
}

module.exports = (app) => {
    return new IntraSOF(app);
}


