import React from "react";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import { Button } from "./styles";

export const FavButton = ({ likes, liked, onClick }) => {
    const Icon = !liked ? BiLike : AiTwotoneLike;
    return (
        <Button onClick={onClick}>
            <Icon size="32px" />
            {likes} Likes!!
        </Button>
    );
};
