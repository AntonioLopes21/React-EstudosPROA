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
            <p>Evento de captação de tecla pelo console</p>
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

//eventos de foco
function FocusBlurComponent() {
    function handleFocus() {
        console.log('Input focused')
    }

    function handleBlur() {
        console.log('Input lost focus')
    }

    return <input type="text" className="Focus" onFocus={handleFocus} onBlur={handleBlur}/>
}

//eventos de mouse
function HoverComponent() {
    function handleMouseEnter() {
        console.log('Mouse entrou na div')
    }

    function handleMouseLeave() {
        console.log('Mouse saiu!')
    }

    return (
        <div id="Divisoria" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover over this text
        </div>
    )
}


//formulário
function SimpleForm() {
    //definindo o estado para armazenar o valor do campo de entrada
    const [name, setName] = useState('')

    //funcao que sera chamada sempre que o valor do input mudar
    const handleInputChange = (event) => {
        setName(event.target.value)
    }

}

export {ClickButton, InputField, KeyDownComponent, FocusBlurComponent, HoverComponent}

