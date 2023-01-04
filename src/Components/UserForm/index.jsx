import React from "react";
import { Link } from "react-router-dom";
import { useInputsData } from "../../Hooks/useInputsData";
import { Form, Input, Button, Header } from "./styles";

export const UserForm = ({
    submitForm,
    title,
    initialState = {},
    setRegister,
    isRegister,
}) => {
    const { dataInput, setDataInput } = useInputsData(initialState);
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
                    onChange={(e) =>
                        setDataInput({
                            ...dataInput,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={dataInput.password}
                    onChange={(e) =>
                        setDataInput({
                            ...dataInput,
                            [e.target.name]: e.target.value,
                        })
                    }
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
                <a onClick={() => setRegister(!isRegister)}>
                    Ya tienes cuenta?, inicia Sesion
                </a>
                <Button>{title}</Button>
            </Form>
        </>
    );
};
