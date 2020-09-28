import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Spin} from "antd";

const SearchContainer = lazy(() => import("../containers/Search"));
const ReposContainer = lazy(() => import("../containers/Repos"));

const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<Spin />}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={{pathname: "/search"}} />
                    </Route>
                    <Route exact path="/search">
                        <SearchContainer />
                    </Route>
                    <Route path="/search/:login/repos">
                        <ReposContainer />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
