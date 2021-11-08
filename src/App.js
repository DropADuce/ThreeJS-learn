import React from 'react';
import MainPage from "./Pages/MainPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import FirstProjectPage from "./Pages/FirstProjectPage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/first' component={FirstProjectPage}/>
                <Redirect to={'/'} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;