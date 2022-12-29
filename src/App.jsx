import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from "./Components/Logo";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pet/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};
