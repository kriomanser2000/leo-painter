import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Biography from './components/Biography';
import MostFamousPainting from './components/MostFamousPainting';
import PaintingsCollection from './components/PaintingsCollection';
function App() 
{
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/most-famous-painting" element={<MostFamousPainting />} />
          <Route path="/paintings-collection" element={<PaintingsCollection />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;