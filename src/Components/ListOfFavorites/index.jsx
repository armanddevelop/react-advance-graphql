import React from "react";
import { PropTypes } from "prop-types";
import { PhotoCard } from "../PhotoCard";

export const ListOfFavorites = ({ favorites }) => {
    return (
        <>
            <h1>Favorites</h1>
            <ul>
                {favorites.favs.map(
                    ({
                        id,
                        categoriId,
                        categoryId,
                        src,
                        likes,
                        userId,
                        liked,
                    }) => {
                        return (
                            <PhotoCard
                                key={id}
                                id={id}
                                likes={likes}
                                src={src}
                                liked={liked}
                            />
                        );
                    }
                )}
            </ul>
        </>
    );
};
ListOfFavorites.propTypes = {
    favorites: PropTypes.object,
};
