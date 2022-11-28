import React from "react"

export default function Botones () {
    return (
        <div>
            <button onClick={() => alert('Este es el módulo 1')}>Módulo 1</button>
            <button onClick={() => alert('Este es el módulo 2')}>Módulo 2</button>
        </div>
    )
}