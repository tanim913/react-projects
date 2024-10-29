
import './App.css'
import Card from './components/Card.jsx'
import CountryData from './data.json'

function App() {
  return (
    <>
      {CountryData.map((item, index) => (
        <Card
          key={index}
          CountryName={item.CountryName}
          capital={item.Capital}
          currency={item.Currency}
          population={item.Population}
          language={item.Language}
        />
      ))}
    </>
  )
}

export default App;
