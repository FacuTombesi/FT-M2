export default function SearchBar(props) {
   return (
      <div>
         <input type="search" name="search" id=""/>
         <button onClick={() => props.onSearch("Esto va a ser un ID")}>Agregar</button>
      </div>
   );
}
