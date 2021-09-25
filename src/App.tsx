import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components";
import { Dashboard, Details } from "./Pages";

const App = () => (
  <>
    <Header />
    <Box margin={5}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Box>
  </>
);

export default App;
