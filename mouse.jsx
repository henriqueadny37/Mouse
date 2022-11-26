import { useState } from "react"
export default function mouse(){
    
    const[x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        fontFamily:"Arial",
        backgroundColor:"#222",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        fontSize:"50px",
    }

    function whereMove(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return(
        <div style={estilo} onMouseMove={whereMove}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}