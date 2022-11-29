import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
