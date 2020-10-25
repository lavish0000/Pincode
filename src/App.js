import { Redirect, Router } from "@reach/router";

import './App.css';
import Header from "./container/Header/Header";
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Router>
    <Home path="/" />
    <Home path="/:search" />
    <Redirect noThrow from="*" to="/" />
  </Router>
  </div>
  );
}

export default App;
