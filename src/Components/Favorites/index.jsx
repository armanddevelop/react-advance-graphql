import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FAVORITES } from "../../Querys/querys";
import { ListOfFavorites } from "../ListOfFavorites";

export const Favorites = () => {
    const { loading, error, data } = useQuery(GET_FAVORITES, {
        fetchPolicy: "cache-and-network",
    });
    const loadingPage = loading && <h1>Loading....</h1>;
    return (
        <>
            {loadingPage}
            {data ? (
                <ListOfFavorites favorites={data} />
            ) : (
                <h2>Not favorites yet :( Add some</h2>
            )}
        </>
    );
};
