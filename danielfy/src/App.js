import WelcomePage from "./pages/Welcome";
import 'semantic-ui-css/semantic.min.css';
import { Route,BrowserRouter } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/loggedin">
        <LoggedIn />
      </Route>
    </BrowserRouter>
  );
}

export default App;
