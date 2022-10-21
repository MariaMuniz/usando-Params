import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import Hero from './Hero';
import FullCard from './FullCard';


const App = () => {


  const data = [
    {
      title: "HTML",
      description: "this is html"
    },
    {
      title: "CSS",
      description: "this is css"
    },

    {
      title: "JAVASCRIPT",
      description: "this is javascript"
    },

    {
      title: "REACT",
      description: "this is react"
    },

    {
      title: "ANGULAR",
      description: "this is angular"
    },

    {
      title: "VUE",
      description: "this is vue"
    },

  ]


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero data={data} />} />
        <Route path='/cards/:title' element={<FullCard data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
