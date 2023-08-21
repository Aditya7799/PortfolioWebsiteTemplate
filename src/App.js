import React, { useState, useEffect } from "react";
import "./style.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


// Importing the Components
import NewPage from "./components/NewPage";
import Spinner from "./components/spinner";
import NavBarComponent from "./components/NavBarComponent";
import Home from "./components/Home/Home";
import Tab1 from "./components/Tab1/Tab1";

function App() {

  //Initializing [[scrollable]] variable to true. We control scrolling behaviour through this variable
  const [scrollable, setScrollable] = useState(false);
  // We set the id of the parent div to scroll after the below mentioned timeout.
  // We are basically showing the spinner for 1.5 seconds 
  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollable(true);
    },1500);
    // while demounting the component we clear the timer
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router>
      {/*Rednering Spinner Component here*/}
      <Spinner scrollable={scrollable}/>
      <div className = "App" id = {scrollable ? "scroll" : "no-scroll"}>
        <NavBarComponent />
        <NewPage />
        <Routes>
          <Route path ="/" element={<Home/>}/>
          {/*This is a sample Tab. Other Tabs could go below this - Projects/Experience/Certifications/Contact/Blog etc*/}
          <Route path = "/Tab1" element={<Tab1/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
