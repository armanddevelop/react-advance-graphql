import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../Components/UserForm";
import { AppContext } from "../Context";
import { useRegisterUser } from "../Hooks/useRegisterUser";

export const NotRegister = () => {
    const { activeAuth, isRegister, setRegister } = useContext(AppContext);
    const { setDataUser, response, mutationError, mutationLoading } =
        useRegisterUser();
    const navigate = useNavigate();
    const submitForm = (infoUser) => {
        setDataUser(infoUser);
        if (response) {
            activeAuth();
            navigate("/user");
        }
    };
    return (
        <>
            {isRegister ? (
                <UserForm
                    submitForm={submitForm}
                    title={"Registrate"}
                    initialState={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    setRegister={setRegister}
                    isRegister={isRegister}
                    error={mutationError}
                    loading={mutationLoading}
                />
            ) : (
                <UserForm
                    submitForm={submitForm}
                    title={"Iniciar Sesion"}
                    initialState={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    setRegister={setRegister}
                    isRegister={isRegister}
                    error={mutationError}
                    loading={mutationLoading}
                />
            )}
        </>
    );
};
