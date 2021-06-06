import React from "react";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch />
    </Router>
  );
}

export default App;
