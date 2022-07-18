import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Edit from './pages/Edit';


function App() {
  return (
    <Router>
      <h3>Meme Generator</h3>
      <Routes>
        <Route exact path = '/' element={<Home/>} />
        <Route exact path = '/edit' element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
