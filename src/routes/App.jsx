import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@containers/Home";
import { DataProvider } from "@context/DataProvider";
import Layout from "@components/Layout";
import PageLoading from "../components/PageLoading";

/* import { hot } from "react-hot-loader/root"; */
/* import Price from "@containers/Price"; */

/* const AsyncCheckoutContainer = React.lazy(() =>
  import("@components/ListPrice")
); */

const AsyncPriceContainer = React.lazy(() => import("@containers/Price"));

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <DataProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/price" component={AsyncPriceContainer} />
              {/*  <Route exact path="/price" component={Price} /> */}
            </Switch>
          </Layout>
        </BrowserRouter>
      </DataProvider>
    </Suspense>
  );
}

export default App;
