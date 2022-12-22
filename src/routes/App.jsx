import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "@containers/Home";
import { DataProvider } from "@context/DataProvider";
import Layout from "@components/Layout";
import PageLoading from "../components/PageLoading";
import NotFound from "../components/NotFound";

/* import Price from "@containers/Price"; */

const AsyncPriceContainer = React.lazy(() => import("@containers/Price"));

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <DataProvider>
        <HashRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/price" component={AsyncPriceContainer} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </HashRouter>
      </DataProvider>
    </Suspense>
  );
}

export default App;
