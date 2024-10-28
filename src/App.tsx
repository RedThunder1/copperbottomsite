import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'

function App() {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
  );
}

export default App;
