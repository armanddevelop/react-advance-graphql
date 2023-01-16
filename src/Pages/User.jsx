import React, { useContext } from "react";
import { Button } from "../Components/UserForm/styles";
import { AppContext } from "../Context";

export const User = () => {
    const { closeSession } = useContext(AppContext);
    return (
        <>
            <Button onClick={closeSession}>Sing Out</Button>
        </>
    );
};
