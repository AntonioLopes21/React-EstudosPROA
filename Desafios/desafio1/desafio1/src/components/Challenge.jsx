import React from "react";

function Challenge() {
     let valor1 = parseInt(prompt('digite um valor'))
     let valor2 = parseInt(prompt('digite outro valor'))


    const SomaValores = () => {
    
        return alert (`O valor de ${valor1} + ${valor2} = ${valor1 + valor2}`)


    }

    const SubtrairValores = () => {
        
        return alert (`O valor de ${valor1} - ${valor2} = ${valor1 - valor2}`)
    }

    const MultiplicarValores = () => {
        
        return alert (`O valor de ${valor1} x ${valor2} = ${valor1 * valor2}`)
    }

    const DividirValores = () => {
        
        return alert (`O valor de ${valor1} / ${valor2} = ${valor1 / valor2}`)
    }


    return(
        <>  <main>
            <div>
                <h1>Os valores digitados foram: {valor1} e {valor2}</h1>
            </div>

            <button onClick={SomaValores}>Adição</button>
            <button onClick={SubtrairValores}>Subtrair</button>
            <button onClick={MultiplicarValores}>Multiplicar</button>
            <button onClick={DividirValores}>Dividir</button>
            </main>
        </>
    )
}

export default Challenge