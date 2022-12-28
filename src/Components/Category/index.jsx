import React from "react";
import { Link, Img } from "./styles";
const DEFAULT_IMAGE = "https://picsum.photos/200/100";

export const Category = ({
    cover = DEFAULT_IMAGE,
    path = "#",
    emoji = "?",
}) => (
    <Link to={path}>
        <Img src={cover} />
        {emoji}
    </Link>
);
