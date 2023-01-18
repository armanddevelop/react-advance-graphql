import React, { useContext } from "react";
import { DocumentHead } from "../Components/Head";
import { Button } from "../Components/UserForm/styles";
import { AppContext } from "../Context";

export const User = () => {
    const { closeSession } = useContext(AppContext);
    return (
        <>
            <DocumentHead
                title="user-information"
                name={"user"}
                content={"information about the user"}
            />
            <Button onClick={closeSession}>Sing Out</Button>
        </>
    );
};
