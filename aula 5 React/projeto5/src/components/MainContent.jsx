import React from "react";


//eventos de clicks -> onClick
//                //desestruturação do props//
function MainContent({name, idade, hp}) {
    return (
        <>
            <main>
                <h1>Hello, {name}!</h1>
                <p>You are {idade} years old and you have {hp} life</p>
                <h1>
                    Aqui está o conteúdo h1
                </h1>
            </main>
        </>
    )
}

export default MainContent