
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';
import Interface from './components/Interface';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Interface' element={<Interface />} />
      </Routes>
    </Router>
  );
}

export default App;
