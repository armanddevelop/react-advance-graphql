import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { DocumentHead } from "../Components/Head";
import { ListOfCategories } from "../Components/ListOfCategories";
import { ListOfPhotoCard } from "../Components/ListOfPhotoCard";

export const Home = () => {
    const params = useParams();
    return (
        <>
            <DocumentHead
                title={"Petgram-Your app to see pets photos"}
                name={"description"}
                content={"You can find pet photos"}
            />
            <ListOfCategories />
            <ListOfPhotoCard categoryId={parseInt(params.id)} />
        </>
    );
};
