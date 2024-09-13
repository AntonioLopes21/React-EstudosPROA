const FirstComponent = () => {

    const name = "Antônio"
    const name1 = "Polis"
    

    function horario() {
        const hora = new Date().getHours()

        if(hora < 12) {
            return "Bom dia, princesa!"
        } else if (hora >= 12 && hora < 18) {
            return "Boa tarde, princesa"
        } else {
            return "Boa noite, princesa!"
        }

    }


    const usuario = {
        nome : "Antônio",
        sobrenome : "De Pádua",
        idade : 20
    }

    return(
        <div>
            <h1> Meu primeiro componente!</h1>
            
            <h1>{name}</h1>
            <p>{name}</p>
            <p>A soma de 2 + 2 = {2+2}</p>
            <h2>{horario()}</h2>
            
            <div>
                <p>Meu nome é {usuario.nome} {usuario.sobrenome} e tenho {usuario.idade}</p>
            </div>
        </div>
    )
}

export default FirstComponent