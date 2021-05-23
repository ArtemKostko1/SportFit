import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { routerComponents } from './routerComponents';
import { MAIN_ROUTE } from "./routerConsts";

const AppRouter = () => {
    return (
        <Switch>
            {routerComponents.map(({ path, Component }) =>
                <Route key={ path } path={ path } component={ Component } exact/>
            )}
            <Redirect to={ MAIN_ROUTE }/>
        </Switch>
    );
};

export default AppRouter;
