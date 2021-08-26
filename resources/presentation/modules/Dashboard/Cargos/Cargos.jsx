import React from 'react';

import {Route, Switch} from "react-router-dom";

import routes from './cargos.routes';

const Cargos = () => {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <Route {...route} key={i} />
            })}
        </Switch>
    );
};

export default Cargos;
