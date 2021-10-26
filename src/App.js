import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import Media from "./pages/media/Media";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/info">
            <Info />
          </Route>

          <Route exact path="/media">
            <Media />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
