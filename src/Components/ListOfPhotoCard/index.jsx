import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCard = () => {
    return (
        <ul style={{ paddingLeft: "0px" }}>
            {[1, 2, 3].map((item) => (
                <PhotoCard key={item} />
            ))}
        </ul>
    );
};