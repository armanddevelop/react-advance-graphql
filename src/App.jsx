import React, { useContext, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from "./Components/Logo";
import { NavBar } from "./Components/NavBar";
import { AppContext } from "./Context";
import { Home, Detail, NotRegister, User } from "./Pages";
import { ProtectedRoutes } from "./Routes/ProtectedRoutes";
import { GlobalStyle } from "./styles/GlobalStyles";

const Favs = lazy(() => import("./Pages/Favorite"));
export const App = () => {
    const { isAuth } = useContext(AppContext);
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/not-register" element={<NotRegister />} />
                    <Route path="/pet/:id" element={<Home />} />
                    <Route path="/detail/:detailId" element={<Detail />} />
                    <Route
                        element={
                            <ProtectedRoutes
                                user={isAuth}
                                redirectPath="/not-register"
                            />
                        }
                    >
                        <Route path="/favorites" element={<Favs />} />
                        <Route path="/user" element={<User />} />
                    </Route>
                </Routes>
                <NavBar />
            </BrowserRouter>
        </Suspense>
    );
};
