class Permissoes{
    
    constructor(){
        this._usuariosPermitidos = "Aleks, Alexis, Loiane, Alysson, Tiago, Ramon, Karlei, Robson, Pedro, Marcílio, Rodrigo, Marcos";
    }

    isUsuarioPermitido(usuario){
        return this._usuariosPermitidos.includes(usuario);
    } 

    listarTodosUsuariosPermitidos(){
        return this._usuariosPermitidos.split(",");
    }


}

module.exports = () => {
    return new Permissoes();
}
