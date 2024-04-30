import './App.css';
import elephant from "./images/elephant.jpeg";
import React from 'react'

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  return (
    <>
    <h1 className='title'>Kalvium Gallery</h1>
    <div className="main">
    {imageData().map((img) => (
      <div key={img.id} className="image-container">
        <img src={img.img} alt="elephant" className="gallery-image"/>
      </div>
    ))}
  </div>
  </>
    
  );
}

export default App;
