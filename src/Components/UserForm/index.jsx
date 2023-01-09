import React from "react";
import { PropTypes } from "prop-types";
import { useErrors } from "../../Hooks/useErrors";
import { useInputsData } from "../../Hooks/useInputsData";
import {
    Form,
    Input,
    Button,
    Header,
    DivAnchor,
    Error,
    DivError,
} from "./styles";

export const UserForm = ({
    submitForm,
    title,
    initialState = {},
    setRegister,
    isRegister,
    error,
    loading,
}) => {
    const { dataInput, setDataInput } = useInputsData(initialState);
    const { errorMsg, setErrorMsg } = useErrors(error);
    const handleClick = () => {
        setRegister(!isRegister);
        setErrorMsg(false);
    };
    const kindAnchor =
        title === "Registrate" ? (
            <a onClick={handleClick}>
                Ya tienes cuenta?, <b>inicia Sesion</b>
            </a>
        ) : (
            <a onClick={handleClick}>
                No tienes cuenta?,
                <b>Registrate</b>
            </a>
        );
    const handleChange = ({ target }) => {
        setDataInput({
            ...dataInput,
            [target.name]: target.value,
        });
        setErrorMsg(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(dataInput);
    };
    return (
        <>
            <Header>{title}</Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    name="email"
                    value={dataInput.email}
                    onChange={(e) => handleChange(e)}
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={dataInput.password}
                    onChange={(e) => handleChange(e)}
                />

                {title === "Registrate" && (
                    <Input
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={dataInput.confirmPassword}
                        onChange={(e) =>
                            setDataInput({
                                ...dataInput,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                )}
                <DivAnchor>{kindAnchor}</DivAnchor>
                <Button disabled={loading}>{title}</Button>
            </Form>
            <DivError>
                <Error>{errorMsg && "el usuario ya existe"}</Error>
            </DivError>
        </>
    );
};
UserForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    initialState: PropTypes.object.isRequired,
    setRegister: PropTypes.func.isRequired,
    isRegister: PropTypes.bool.isRequired,
};
