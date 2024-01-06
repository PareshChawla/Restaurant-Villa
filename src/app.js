import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";

const Contact = lazy(() => import("./components/Contact"));


const AppLayout = () => {

        const [user, setUser] = useState({
            name: "Paresh Chawla",
            email: "pareshchawlagmail.com",
        });


    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
        }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileClass />,
                    },
                ],
            },
            {
                path: "/instamart",
                element: <Instamart />,
            },
            {
                path: "/contact",
                element: 
                <Suspense fallback={<Shimmer />}>
                    <Contact />
                </Suspense>,
            },
            {
                path: "/login",
                element: <LoginForm />,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);