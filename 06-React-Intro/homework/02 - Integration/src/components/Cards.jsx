import Card from './Card';
import characters from '../data';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map(props => <Card/>)}
      </div>
   )
}
