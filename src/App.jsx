import React from "react";
import { ListOfCategories } from "./Components/ListOfCategories";
import { ListOfPhotoCard } from "./Components/ListOfPhotoCard";
import { Logo } from "./Components/Logo";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCard categoryId={2} />
    </>
);
