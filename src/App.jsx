import React from "react";
import { ListOfCategories } from "./Components/ListOfCategories";
import { ListOfPhotoCard } from "./Components/ListOfPhotoCard";
import { Logo } from "./Components/Logo";
import { PhotoCardWithQuery } from "./Container/PhotoCardWithQuery";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailParams = urlParams.get("detail");
    return (
        <>
            <GlobalStyle />
            <Logo />
            {detailParams ? (
                <PhotoCardWithQuery id={detailParams} />
            ) : (
                <>
                    <ListOfCategories />
                    <ListOfPhotoCard />
                </>
            )}
        </>
    );
};
