import React from "react";
import Navbar from "./Navbar/Navbar";
import {  About, Header, Work } from '../container';
import './App.scss'
function App() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
  </div>

  );
}

export default App;
