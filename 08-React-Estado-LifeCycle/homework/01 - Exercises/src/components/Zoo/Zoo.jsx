import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: []
   })

   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json()) // Esta línea se copia tal cual para parsear el fetch
      .then((data) =>
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      ) // Después de parsear cambia los valores que se le dan
      .catch((error) => console.log(error));
   }, [])

   const handleInputChange = (e) /*event que se ejecuta en un input*/ => {
      setZoo({...zoo, /*spread operator copia el estado y solo cambia zooName*/ zooName: e.target.value /*agarra el valor del evento y cambia zooName*/})
   }

   const handleSpecies = e => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter(a => a.species === e.target.value)
      })
   }

   const handleAllSpecies = () => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals
      })
   }

   return (
      <div>
         <label htmlFor='nameInput'>Zoo Name:</label>
         <input type="text" value={zoo.zooName} name="nameInput" onChange={handleInputChange}></input>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
         <Animals animals={zoo.animals} />
      </div>
   );
}
