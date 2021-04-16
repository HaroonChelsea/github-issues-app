import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const Home = lazy(() => import("./containers/Home/Home"));
const Issues = lazy(() => import("./containers/Issues/Issues"));
const Details = lazy(() => import("./containers/Details/Details"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    >
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:full/:name/issues/" component={Issues} />
        <Route exact path="/:full/:name/issues/:number" component={Details} />
      </Switch>
    </Suspense>
  );
}

export default App;
