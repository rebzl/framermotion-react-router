import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Model from "./pages/Model";
// Components
import Header from "./components/Header";
// Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          // initial={false} = La animacion no se va a ejecutar cuando recarga la pagina. Solo cuando la animacion es llamada
          // exitBeforeEnter = Va a renderizar un componente a la vez. El component existente va a terminar la animacion antes que otro componente es renderizdo
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      ></Route>
    </Router>
  );
}

export default App;
