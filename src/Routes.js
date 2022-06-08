import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Safari from "./pages/safari/safari";
import Sobre from "./pages/sobre/sobre";



export default function Rotas(){

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/safari" element={<Safari />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        </BrowserRouter>
    )
}