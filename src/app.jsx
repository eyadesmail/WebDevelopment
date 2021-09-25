import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import { HomePage } from "./pages/home_page";
import { ContactPage } from "./pages/contact_page";

import { NavigationBar } from "./nav-bar/nav_bar";
import CssBaseline from "@material-ui/core/CssBaseline";




export default function App() {


    return (
        <BrowserRouter>

            <CssBaseline />

            <div>

                <NavigationBar />
                <Switch>
                    <Route path={'/contactme'}>
                        <ContactPage/>
                    </Route>
                    <Route path={'/'}>
                        <HomePage/>
                    </Route>
                </Switch>



                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', background: '#e8ebed'}}>
                    <h5> Designed using React by Eyad Esmail </h5>
                </div>
            </div>
        </BrowserRouter>

    );

}