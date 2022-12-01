import React from 'react'

export default function Species () {
  return (
    <div>
      <h2>Species</h2>
      {props.species.map((s, i) => <button key={i} value={s} onClick={props.handleSpecies}>{s}</button>)}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
