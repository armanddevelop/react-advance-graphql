import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../Container/PhotoCardWithQuery";
export const Detail = () => {
    const params = useParams();
    return <PhotoCardWithQuery id={parseInt(params.detailId)} />;
};
