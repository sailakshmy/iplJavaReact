import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamPage from './Pages/TeamPage';

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
        <Route exact path='/' element={<h1>IPL Dashboard</h1>} />
        <Route path='/teams/:teamName' exact element={<TeamPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
