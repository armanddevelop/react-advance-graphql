import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from "./Components/Logo";
import { PhotoCardWithQuery } from "./Container/PhotoCardWithQuery";
import { Home } from "./Pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailParams = urlParams.get("detail");
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Logo />
            {detailParams ? (
                <PhotoCardWithQuery id={detailParams} />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pet/:id" element={<Home />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};
