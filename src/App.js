import React from "react";
import './App.css';
import Nav from "./Nav";
import MenuCard from "./MenuCard";
import Discount from "./Discount";
import Footer from "./Footer";
import Main from "./Main";


function App() {
  return (

    <>
      <Nav/>
      <Main />
      <Discount/>
      <MenuCard/>
      <Footer/>
    </>
  );
};

export default App;
