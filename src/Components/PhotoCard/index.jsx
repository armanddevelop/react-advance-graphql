import React from "react";
import { Button, ImgWarpper, Img } from "./styles";
import { BiLike } from "react-icons/bi";

const DEAFULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export const PhotoCard = ({ id, likes = 0, srcImage = DEAFULT_IMAGE }) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWarpper>
                    <Img src={srcImage} />
                </ImgWarpper>
            </a>
            <Button>
                <BiLike size="32px" /> {likes} Likes!!
            </Button>
        </article>
    );
};
