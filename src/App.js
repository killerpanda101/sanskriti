import React from "react";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Announcements from './pages/Announcements/Announcements';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/announcements' component={Announcements} />
        <Route path='/events' component={Announcements} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
