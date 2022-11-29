import React from "react"

// function Botones () {
//     return (
//         <div>
//             <button onClick={() => alert('Este es el módulo 1')}>Módulo 1</button>
//             <button onClick={() => alert('Este es el módulo 2')}>Módulo 2</button>
//         </div>
//     )
// }

class Botones extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
                <button onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}

export default Botones