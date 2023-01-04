import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../Components/UserForm";
import { AppContext } from "../Context";
export const NotRegister = () => {
    const { activeAuth, isRegister, setRegister } = useContext(AppContext);
    const navigate = useNavigate();
    const submitForm = (infoData) => {
        console.log("esto vale infoDAta ", infoData);
        activeAuth();
        navigate("/user");
    };
    return (
        <>
            {isRegister ? (
                <UserForm
                    submitForm={submitForm}
                    title={"Registrate"}
                    initialState={{ name: "", password: "" }}
                    setRegister={setRegister}
                    isRegister={isRegister}
                />
            ) : (
                <UserForm
                    submitForm={submitForm}
                    title={"Iniciar Sesion"}
                    initialState={{
                        name: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    setRegister={setRegister}
                    isRegister={isRegister}
                />
            )}
        </>
    );
};
