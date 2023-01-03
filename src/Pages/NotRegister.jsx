import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";
export const NotRegister = () => {
    const { activeAuth } = useContext(AppContext);
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        activeAuth();
        navigate("/user");
    };
    return (
        <form onSubmit={submitForm}>
            <button>Registrarse</button>
        </form>
    );
};
