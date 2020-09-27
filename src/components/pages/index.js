import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Spin} from "antd";

const SearchPage = lazy(() => import("./Search"));
const ReposPage = lazy(() => import("./Repos"));

const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<Spin />}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={{pathname: "/search"}} />
                    </Route>
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/search/:login/repos">
                        <ReposPage />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
