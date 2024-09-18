import React, { useState } from "react"

function ClickButton() {
    function handleClick() {
        alert('botão clicado!')
    }

    return <button className="Botaozin" onClick={handleClick}>Click me</button>
}

//funcao para o campo do input
function InputField() {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <p>Você digitou isso aqui:{value}</p>
        </div>
    )
}

//eventos de teclado
function KeyDownComponent() {
    function handleKeyDown(event) {
        console.log(`Key pressed: ${event.key}`)
    }

    return <input type="text" onKeyDown={handleKeyDown}/>
}

export {ClickButton, InputField, KeyDownComponent}

