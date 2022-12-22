import React, { useState } from "react";
import { Button, ImgWarpper, Img, Article } from "./styles";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import { useLazyLoad } from "../../Hooks/useLazyLoad";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

const DEAFULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id = 0, likes = 0, srcImage = DEAFULT_IMAGE }) => {
    const key = `like_${id}`;
    const { show, reference } = useLazyLoad();
    const { storedValues, setLocalStorage } = useLocalStorage(key);
    const [countLikes, setCountLikes] = useState(likes);
    const Icon = !storedValues ? BiLike : AiTwotoneLike;
    return (
        <Article ref={reference}>
            {show && (
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWarpper>
                            <Img src={srcImage} />
                        </ImgWarpper>
                    </a>
                    <Button onClick={() => setLocalStorage(!storedValues)}>
                        <Icon size="32px" />
                        {countLikes} Likes!!
                    </Button>
                </>
            )}
        </Article>
    );
};
