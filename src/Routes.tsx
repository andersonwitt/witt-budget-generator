import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/templates/layout";
import Home from "./components/pages/home";
import NewBudget from "./components/pages/new-budget";
import DocViewer from "./components/pages/doc-viewer";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/budget" component={NewBudget} />
            <Route exact path="/viewer" component={DocViewer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routes;
