process.env["NTBA_FIX_319"] = 1; //para tirar aviso de erro ao carregar node-telegram
var TelegramBot = require('node-telegram-bot-api');
const token = '686115106:AAEwYAqij0Ar8eB1GO8X2Gj40PoI6gTgVhQ';
const bot = new TelegramBot(token, {filepath: false, polling: true});

var consign = require('consign');
consign().include('service').into(bot);

bot.onText(/\/buscar (.+)/, async (msg, match) => { 
    const chatId = msg.chat.id;
    const termoABuscar = match[1]; 

    let intraSOF = bot.service.IntraSOF;
    let paginas = await intraSOF.buscar(termoABuscar);

    if (paginas && paginas.length > 0){
        await bot.sendMessage(chatId, "Encontrados " + paginas.length + " resultados");
        paginas.forEach(pagina => {bot.sendMessage(chatId, pagina)});
    }
    else{
        bot.sendMessage(chatId, "Nenhuma página encontrada");
    }        
  });

  bot.onText(/\/start/, async (msg, match) => { 
    bot.sendMessage(msg.chat.id, "Olá, " + msg.from.first_name + " para buscar termos na IntraSOF use /buscar <termo>");
  });


bot.on('polling_error', (error) => {
    console.log('polling_error:' + error.code);  
});  