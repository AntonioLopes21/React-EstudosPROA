import React from "react";

function UserDetails() {
    const Pessoa = {
        nome: 'Antônio', 
        idade: 20,
        profissao: 'Desenvolvedor',


        verificarIdade() {
            if (this.idade >= 18) {
                return `${this.nome} pode tirar habilitação`
            } else {
                return `${this.nome} não pode tirar a habilitação`
            }
        
        }
    }

    

    return(
        <>
            <h1>Olá {Pessoa.nome} de {Pessoa.idade} e {Pessoa.profissao} </h1>
            <h1>{Pessoa.verificarIdade()}</h1>
        </>
    )   
    
}
    
      

export default UserDetails