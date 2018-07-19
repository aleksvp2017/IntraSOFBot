class Mensagem{
    
    obterMensagemBoasVindas(usuario){
        if (usuario == "Loiane"){
            return  "Lolo oh Lolo! Para buscar termos na IntraSOF use /buscar <termo>";    
        }
        else if (usuario == "Alysson"){
            return  "Faaaaala tanguinha! Para buscar termos na IntraSOF use /buscar <termo>";    
        }
        else if (usuario == "Tiago"){
            return  "Fala Mestre dos Bots! Para buscar termos na IntraSOF use /buscar <termo>";    
        }
        else if (usuario == "Marcos"){
            return  "Fala Mr. Artigos! Para buscar termos na IntraSOF use /buscar <termo>";    
        }    
        else if (usuario == "Ramon"){
            return  "Grande Ramon, dá um abraço aqui! Para buscar termos na IntraSOF use /buscar <termo>";    
        }    
        else if (usuario == "Karlei"){
            return  "Fala Big Boss! Para buscar termos na IntraSOF use /buscar <termo>";    
        }   
        else if (usuario == "Robson"){
            return  "Mr.Robson! Para buscar termos na IntraSOF use /buscar <termo>";    
        }    
        else if (usuario == "Pedro"){
            return  "Antes de começar, Wilson te ligou! Para buscar termos na IntraSOF use /buscar <termo>";    
        }  
        else if (usuario == "Rodrigo"){
            return  "Faaaala Rodrigão, e o Crossfit?! Para buscar termos na IntraSOF use /buscar <termo>";    
        }   
        else if (usuario == "Marcílio"){
            return  "Faaala Marcílio, já trocou uma fralda hj?! Para buscar termos na IntraSOF use /buscar <termo>";    
        }  
        else{
            return  "Olá, " + usuario + " para buscar termos na IntraSOF use /buscar <termo>";
        }
    }

}

module.exports = () => {
    return new Mensagem();
}
