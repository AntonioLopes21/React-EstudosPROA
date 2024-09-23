
function Lista() {

    const numeros = [1,2,3,4,21,312,33]
    const itemDaLista = numeros.map((num) => <li key={num}>{num}</li>)

    // for(let contador = 0; contador <= 10; contador++) {
    // }

    // for let = num of numeros {

    // }

    return (
        <>
            <ul>
                {itemDaLista}
            </ul>
        </>
    )
}

export default Lista