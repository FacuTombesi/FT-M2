import React from "react"

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
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
