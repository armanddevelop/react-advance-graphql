import React from "react";
import { Error } from "./styles";

export const ErrorsComponent = ({ title }) => {
    return (
        <Error>
            {title === "Registrate"
                ? "el usuario ya existe"
                : "la constraseña no es correcta o el usuario no existe"}
        </Error>
    );
};
