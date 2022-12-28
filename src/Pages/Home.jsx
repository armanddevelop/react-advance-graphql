import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../Components/ListOfCategories";
import { ListOfPhotoCard } from "../Components/ListOfPhotoCard";

export const Home = () => {
    const params = useParams();
    return (
        <>
            <ListOfCategories />
            <ListOfPhotoCard categoryId={parseInt(params.id)} />
        </>
    );
};
