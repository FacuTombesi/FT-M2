import React from "react"
import Botones from "./Botones";

const studentName = "Facundo Tombesi";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Homework 06 Intro React</h1>
      <h3>{studentName}</h3>
      <ul>{techSkills.map()}</ul>
      {ReactDOM.render(<Botones alertaM1={alerts.m1} alertaM2={alerts.m2} />)}
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
