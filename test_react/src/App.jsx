
import './App.css'
import Card from './components/Card.jsx'
import ClassCard from './components/ClassCard.jsx'
import NestedCard from './components/NestedCard.jsx'
import CountryData from './data.json'
import UserData from './user_data.json'
import { v4 as uuidv4} from "uuid";

function App() {
  return (
    <>
      {CountryData.map((item) => (
        <Card
          key={uuidv4()}
          CountryName={item.CountryName}
          capital={item.Capital}
          currency={item.Currency}
          population={item.Population}
          language={item.Language}
        />
      ))}
      
      <div className="nested-card-container">
        {UserData.map((user, index) => (
          <NestedCard
            key={index}
            fullname={user.fullname}
            age={user.age}
            phones={user.phones}
          />
        ))}
      </div>

      {/* Class component */}
      <ClassCard name="Class component passing props" />
    </>
  )
}

export default App;
