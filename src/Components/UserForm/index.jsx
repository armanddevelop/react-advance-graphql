import React from "react";
import { useInputsData } from "../../Hooks/useInputsData";
import { Form, Input, Button, Header, DivAnchor } from "./styles";

export const UserForm = ({
    submitForm,
    title,
    initialState = {},
    setRegister,
    isRegister,
}) => {
    const { dataInput, setDataInput } = useInputsData(initialState);
    const kindAnchor =
        title === "Registrate" ? (
            <a onClick={() => setRegister(!isRegister)}>
                Ya tienes cuenta?, <b>inicia Sesion</b>
            </a>
        ) : (
            <a onClick={() => setRegister(!isRegister)}>
                No tienes cuenta?,
                <b>Registrate</b>
            </a>
        );
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
                <DivAnchor>{kindAnchor}</DivAnchor>
                <Button>{title}</Button>
            </Form>
        </>
    );
};
