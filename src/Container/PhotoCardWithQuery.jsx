import { useQuery } from "@apollo/client";
import React from "react";
import { PropTypes } from "prop-types";
import { PhotoCard } from "../Components/PhotoCard";
import { GET_SINGLE_PHOTO } from "../Querys/querys";

export const PhotoCardWithQuery = ({ id }) => {
    const { error, data, loading } = useQuery(GET_SINGLE_PHOTO, {
        variables: { id },
    });

    const dataInfo = data?.photo ? data.photo : {};
    return <PhotoCard {...dataInfo} />;
};

PhotoCardWithQuery.prototype = {
    id: PropTypes.number,
};
