import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((characters, index) => {
            return (<Card key={index} name={characters.name} species={characters.species} gender={characters.gender} image={characters.image}/>)
         })}
      </div>
   )
}
