import React from "react";
import { Link } from "react-router-dom";
import { ImgWarpper, Img, Article } from "./styles";
import { FavButton } from "../FavButton";
import { useLazyLoad } from "../../Hooks/useLazyLoad";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { useLikePhoto } from "../../Hooks/useLikePhoto";

const DEAFULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
    id = 0,
    likes = 0,
    src = DEAFULT_IMAGE,
    liked,
}) => {
    const key = `like_${id}`;
    const { show, reference } = useLazyLoad();
    //const { storedValues } = useLocalStorage(key);
    const { toogleLike, toogleUnLike } = useLikePhoto();
    const handleClickFav = () => {
        toogleLike({ variables: { input: { id } } });
    };

    return (
        <Article ref={reference}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWarpper>
                            <Img src={src} />
                        </ImgWarpper>
                    </Link>
                    <FavButton
                        likes={likes}
                        liked={liked}
                        onClick={handleClickFav}
                    />
                </>
            )}
        </Article>
    );
};
