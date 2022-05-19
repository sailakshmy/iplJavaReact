import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamPage from './Pages/TeamPage';
import MatchPage from './Pages/MatchPage';

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
        <Route exact path='/' element={<h1>IPL Dashboard</h1>} />
        <Route path='/teams/:teamName' exact element={<TeamPage/>} />
        <Route path='/teams/:teamName/matches/:year' exact element={<MatchPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
