import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../Components/UserForm";
import { AppContext } from "../Context";
import { useRegisterUser } from "../Hooks/useRegisterUser";
import { useLoginUser } from "../Hooks/useLoginUser";
import { submitForm as submit } from "../utils/formUtils";
const FORM_FIELDS = {
    email: "",
    password: "",
    confirmPassword: "",
};
export const NotRegister = () => {
    const { activeAuth, isRegister, setRegister } = useContext(AppContext);
    const { register, mutationError, mutationLoading } = useRegisterUser();
    const { login, loginLoading, loginError } = useLoginUser();
    const navigate = useNavigate();
    const submitForm = async (data) => {
        const { dataInput, title } = data;
        let response = null;
        if (title === "Registrate") {
            response = await submit(title, dataInput, register);
        } else if (title === "Iniciar Sesion") {
            response = await submit(title, dataInput, login);
        }
        if (response) {
            const { data } = response;
            activeAuth(data);
            navigate("/user");
        }
    };
    return (
        <>
            {isRegister ? (
                <UserForm
                    submitForm={submitForm}
                    title={"Registrate"}
                    initialState={FORM_FIELDS}
                    setRegister={setRegister}
                    isRegister={isRegister}
                    error={mutationError}
                    loading={mutationLoading}
                />
            ) : (
                <UserForm
                    submitForm={submitForm}
                    title={"Iniciar Sesion"}
                    initialState={FORM_FIELDS}
                    setRegister={setRegister}
                    isRegister={isRegister}
                    error={loginError}
                    loading={loginLoading}
                />
            )}
        </>
    );
};
