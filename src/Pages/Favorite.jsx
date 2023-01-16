import React from "react";
import { Favorites as Fav } from "../Components/Favorites";
import { DocumentHead } from "../Components/Head";

export const Favorites = () => (
    <>
        <DocumentHead
            title={"Your favorites"}
            name={"favorites"}
            content={"store pets favorites"}
        />
        <Fav />
    </>
);
