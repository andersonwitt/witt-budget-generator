import { BrowserRouter, Route, Switch } from "react-router-dom";
import WittAppBar from "./components/molecules/WittAppBar";
import DocViewer from "./components/pages/DocViewer";
import Home from "./components/pages/Home";
import NewBudget from "./components/pages/NewBudget";

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
