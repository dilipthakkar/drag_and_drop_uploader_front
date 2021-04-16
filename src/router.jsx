import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboard from './dashboard/dashboard';
import MyDropzone from './drag_and_drop/drag_and_drop';
function Router() {
    return (
        <div>
        <BrowserRouter>
            <Route path="/allfiles" component={Dashboard} exact/>
            <Route path="/" component={MyDropzone} exact/>
        </BrowserRouter>
        </div>
    )
}

export default Router
