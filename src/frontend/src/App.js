import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamPage from './Pages/TeamPage';
import MatchPage from './Pages/MatchPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/teams/:teamName' exact element={<TeamPage/>} />
        <Route path='/teams/:teamName/matches/:year' exact element={<MatchPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
