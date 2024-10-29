import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Posts from './Components/Posts/Posts'
import Support from './Components/Support/Support'

function App() {
  return (
      <>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="support" element={<Support />} />
            </Routes>
        </main>
      </>
  );
}

export default App;
