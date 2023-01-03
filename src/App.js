import React from "react";
import { Route,Routes } from "react-router-dom";
import NavBar from "./NavigationBar/NavBar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projetcs from "./Projects/Projects";
import Contact from "./Contact/Contact";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/projects" element={<Projetcs/>}/>
        <Route exact path="contact" element={<Contact/>}/>
        <Route exact path="*" element={ <Home/>}/>
      </Routes>
      
    </React.Fragment>
  );
}

export default App;