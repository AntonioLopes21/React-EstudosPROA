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
            <p>Olá, {Pessoa.nome} </p>
            <p>Idade:{Pessoa.idade}</p>
            <p>Profissão:{Pessoa.profissao} </p>
            <p>{Pessoa.verificarIdade()}</p>
        </>
    )   
    
}
    
      

export default UserDetails