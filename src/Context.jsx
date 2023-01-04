import React, { useState, createContext } from "react";
const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isRegister, setRegister] = useState(true);
    const activeAuth = () => setIsAuth(true);
    return (
        <AppContext.Provider
            value={{ isAuth, activeAuth, isRegister, setRegister }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
