import React from 'react';
import './App.css'
import Description from './component/Description';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Description/>
      <Footer />
    </div> 
  );
}

export default App;
