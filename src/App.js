import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';

import Register from "./register"
import Form from "./ClientRegister"
import DriverRegister from "./DriverRegister"
import Form1 from "./VehicleRegister"

function App  ()  {
    return (
        <Router>
            <div className="App">
                <div className="content">

                    <Routes>
                        <Route exact path="/" element={<Register/>}/>
                        <Route exact path="/ClientRegister" element={<Form/>}/>
                        <Route exact path="/VehicleRegister" element={<Form1/>}/>
                        <Route exact path="/DriverRegister" element={<DriverRegister/>}/>
                    </Routes>

                </div>

            </div>
        </Router>
    );
}

export default App;
