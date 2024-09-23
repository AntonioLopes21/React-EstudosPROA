import React from "react";


//eventos de clicks -> onClick
function MainContent({name, idade}) {
    return (
        <>
            <main>
                <h1>Hello, {name}!</h1>
                <p>You are {idade} years old</p>
                <h1>
                    Aqui está o conteúdo h1
                </h1>
            </main>
        </>
    )
}

export default MainContent