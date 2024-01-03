import React, { Suspense, lazy } from "react";
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

const Contact = lazy(() => import("./components/Contact"));


const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
)


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