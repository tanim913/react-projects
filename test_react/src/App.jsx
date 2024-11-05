import './App.css';
import './home.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BootstrapCard from './components/BootstrapCard.jsx';
import Card from './components/Card.jsx';
import ClassCard from './components/ClassCard.jsx';
import NestedCard from './components/NestedCard.jsx';
import CountryData from './data.json';
import UserData from './user_data.json';
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Card Viewer</h1>
      <div className="buttons-container">
        <Link to="/card">
          <button className='btn-home'>Card</button>
        </Link>
        <Link to="/nested-card">
          <button className='btn-home'>Nested Card</button>
        </Link>
        <Link to="/class-card">
          <button className='btn-home'>Class Card</button>
        </Link>
        <Link to="/bootstrap-card">
          <button className='btn-home'>Bootstrap Card</button>
        </Link>
      </div>
    </div>
  );
}

function CardPage() {
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
    </>
  );
}

function NestedCardPage() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/nested-card" element={<NestedCardPage />} />
        <Route path="/class-card" element={<ClassCard name="Class component passing props" />} />
        <Route path="/bootstrap-card" element={<BootstrapCard />} />
      </Routes>
    </Router>
  );
}

export default App;
