import './App.css';
import './home.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BootstrapCard from './components/BootstrapCard.jsx';
import StateSetState from './components/StateSetState.jsx'
import Card from './components/Card.jsx';
import Conditional_Rendering from './components/Conditional_Rendering/index.jsx';
import ClassCard from './components/ClassCard.jsx';
import NestedCard from './components/NestedCard.jsx';
import CountryData from './data.json';
import UserData from './user_data.json';
import { v4 as uuidv4 } from "uuid";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Link to="/state-setstate">
          <button className='btn-home'>State and SetState</button>
        </Link>
        <Link to="/conditional_rendering">
          <button className='btn-home'>Conditional Rendering</button>
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
        <Route path="/state-setstate" element={<StateSetState />} />
        <Route path="/conditional_rendering" element={<Conditional_Rendering />} />
      </Routes>
    </Router>
  );
}

export default App;
