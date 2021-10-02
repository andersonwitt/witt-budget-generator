import { BrowserRouter, Route, Switch } from "react-router-dom";
import WittAppBar from "./components/WittAppBar";
import DocViewer from "./views/DocViewer";
import Home from "./views/Home";
import NewBudget from "./views/NewBudget";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <WittAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/budget" component={NewBudget} />
          <Route exact path="/viewer" component={DocViewer} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
