function ClickButton() {
    function handleClick() {
        alert('botão clicado!')
    }

    return <button className="Botaozin" onClick={handleClick}>Click me</button>
}

export default ClickButton

