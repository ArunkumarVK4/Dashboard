// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import CreateAccount from "./CreateAccount";
import Cards from "./Cards";
import Color from "./Color";
import Borders from "./Borders";
import Animation from "./Animation";
import Other from "./Other";
import Errorcode from "./Errorpage";
import Blank from "./Blank";
import Chart from "./Chart";
import Table from "./Table";
import Buttons from "./Buttons";
import Forget from "./Forget";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <CreateAccount />
        </Route>

        <Route path="/cards">
          <Cards />
        </Route>

        <Route path="/colors">
          <Color />
        </Route>

        <Route path="/borders">
          <Borders />
        </Route>

        <Route path="/animations">
          <Animation />
        </Route>

        <Route path="/others">
          <Other />
        </Route>

        <Route path="/errors">
          <Errorcode />
        </Route>

        <Route path="/blank">
          <Blank />
        </Route>

        <Route path="/charts">
          <Chart />
        </Route>

        <Route path="/table">
          <Table />
        </Route>

        <Route path="/buttons">
          <Buttons />
        </Route>

        <Route path="/forget">
          <Forget />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

export function Button({ button1 }) {
  return (
    <div>
      <button type="button" class="btn btn-primary button mb-3">
        {button1}
      </button>
    </div>
  );
}
