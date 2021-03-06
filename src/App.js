import React from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "./Main.css";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Confirmation from "./Pages/Confirmation";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
