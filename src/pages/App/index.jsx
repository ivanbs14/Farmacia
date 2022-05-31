import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sobrenos" element={<Home />}></Route>
            <Route path="/unidades" element={<Home />}></Route>
            <Route path="/contato" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App;