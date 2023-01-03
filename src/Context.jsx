import React, { useState, createContext } from "react";
const AppContext = createContext(null);
const AppProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const activeAuth = () => setIsAuth(true);
    return (
        <AppContext.Provider value={{ isAuth, activeAuth }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
