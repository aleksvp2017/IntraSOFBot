var nodemailer = require('nodemailer');

class Mail{
        enviar(destinatario, assunto, mensagem){        
            if (process.env.USUARIOMAIL && process.env.SENHAMAIL){
                console.log("Enviando email", process.env.USUARIOMAIL);
                var transporter = nodemailer.createTransport({
                service: 'googlemail',
                auth: {
                    user: process.env.USUARIOMAIL,
                    pass: process.env.SENHAMAIL
                }
                });

                var mailOptions = {
                from: process.env.USUARIOMAIL,
                to: destinatario,
                subject: assunto,
                text: mensagem
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error){
                        console.log(error);
                    }
                });         
            }
            else{
                console.log("Emails de notificação desabilitados. Para habilitar defina variáveis de ambiente USUARIOMAIL e SENHAMAIL (do gmail).");
            }            
        }
}

module.exports = () => {
    return new Mail();
}