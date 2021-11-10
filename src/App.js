import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./Routes/Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => (
                    <Route path={route.path} exact={route.exact} key={route.path}>
                        {<route.page isMain={route.isMain || false}/>}
                    </Route>))}
                <Redirect to={'/'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;