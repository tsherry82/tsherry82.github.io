import React from 'react';
import './App.css';
import Bio from './Components/Bio/Bio';
import GradPic from './Assets/gradPic.jpeg'

function App() {
  const picStyle = {
    'width': '450px',
    'height': '550px',
    'boxShadow:': '0px 2px #eee',
    'float': 'left',
    'margin': '10px'
  };
  return (
    <div className="App">
      <div class='container'>
      <img style={picStyle} src={GradPic} alt='gradPic' />
      <Bio />
      </div>
      
    </div>
  );
}

export default App;
