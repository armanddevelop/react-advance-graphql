import { useQuery } from "@apollo/client";
import React from "react";
import { PropTypes } from "prop-types";
import { withPhotos } from "../../Querys/querys";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCard = ({ categoryId }) => {
    const { loading, error, data } = useQuery(withPhotos, {
        variables: { categoryId },
    });
    if (error) return <h2>Internal server Error</h2>;
    if (loading) return <h1>Loading.......</h1>;
    const dataPhotos = data?.photos ? data.photos : [];
    return (
        <ul style={{ paddingLeft: "0px" }}>
            {dataPhotos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
        </ul>
    );
};
ListOfPhotoCard.propTypes = {
    categoryId: PropTypes.number,
};
