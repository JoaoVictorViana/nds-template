import React from 'react';
import {BrowserRouter} from "react-router-dom";

import SidebarProvider from "../contexts/SidebarContext";
import Dashboard from "./Dashboard/Dashboard";

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <SidebarProvider>
                <Dashboard />
            </SidebarProvider>
        </BrowserRouter>
    );
};

export default App;
