import React from "react";
//if nay problem occur in deployment change BrowerRouter to hashRouter
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import GoHome from "./GoHome/GoHome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <GoHome />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
