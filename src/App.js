import React, { Component } from "react";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
