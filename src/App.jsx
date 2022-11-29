import React from "react";
import { ListOfCategories } from "./Components/ListOfCategories";
import { ListOfPhotoCard } from "./Components/ListOfPhotoCard";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
    <>
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCard />
    </>
);
