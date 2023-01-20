import React, { useState, createContext } from "react";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        const token = sessionStorage.getItem("token");
        if (token) return true;
        return false;
    });
    const [isRegister, setRegister] = useState(true);

    const activeAuth = (data) => {
        const storeData = Object.keys(data).map((key) => {
            return { ["tokenData"]: data[key] };
        });
        sessionStorage.setItem("token", JSON.stringify(storeData[0]));
        setIsAuth(true);
    };
    const closeSession = () => {
        sessionStorage.removeItem("token");
        setIsAuth(false);
    };
    return (
        <AppContext.Provider
            value={{
                isAuth,
                activeAuth,
                isRegister,
                setRegister,
                closeSession,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
