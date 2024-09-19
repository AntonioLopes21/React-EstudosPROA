import React from "react"
import imagenzinha from '../assets/laRoxa.png'
function Imagens() {

    const inderencioFrorencio = 'https://i.ytimg.com/vi/43JtONkTrvw/mqdefault.jpg'

    return (
        <>
            <img src={inderencioFrorencio} alt="imagens" width={1000}/>
            <div className="divisinha">
            <img src={imagenzinha} alt="" />
            <img src="./aRoxa.png" alt="" />
            </div>
        </>
    )
}

export default Imagens