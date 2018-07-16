process.env["NTBA_FIX_319"] = 1; //para tirar aviso de erro ao carregar node-telegram
var TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, {polling: true});

var consign = require('consign');
consign().include('service').into(bot);

bot.onText(/\/buscar (.+)/, async (msg, match) => { 
    console.log("onText");
    const chatId = msg.chat.id;
    const termoABuscar = match[1]; 

    let intraSOF = bot.service.IntraSOF;
    let paginas = await intraSOF.buscar(termoABuscar);

    if (paginas && paginas.length > 0){
        bot.sendMessage(chatId, "Encontrados " + paginas.length + " resultados");
        paginas.forEach(pagina => {bot.sendMessage(chatId, pagina)});
    }
    else{
        bot.sendMessage(chatId, "Nenhuma página encontrada");
    }        
  });


bot.on('polling_error', (error) => {
    console.log('polling_error:' + error.code);  
});  