import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { Nav, Link } from "./styles";
const SIZE = "32px";
export const NavBar = () => {
    return (
        <Nav>
            <Link to="/">
                <AiOutlineHome size={SIZE} />
            </Link>
            <Link to="/favorites">
                <MdFavoriteBorder size={SIZE} />
            </Link>
            <Link to="/user">
                <AiOutlineUser size={SIZE} />
            </Link>
        </Nav>
    );
};
