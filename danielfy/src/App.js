import WelcomePage from "./pages/Welcome";
import 'semantic-ui-css/semantic.min.css';
import { Route,BrowserRouter } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import Results from "./pages/Results";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/loggedin">
        <LoggedIn />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
    </BrowserRouter>
  );
}

export default App;
