
import App from "@/App";
import About from "@/layout/About";
import Contact from "@/layout/Contact";
import Login from "@/layout/Login";
import Register from "@/layout/Register";
import Homepage from "@/pages/Homepages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    // home routes
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <div> <Homepage /> </div>,
                index: true
            },
            {
                path: "/about",
                element: <div><About /></div>,
            },
            {
                path: "/contact",
                element: <div><Contact /></div>,
            },
            {
                path: "/login",
                element: <div><Login /></div>,
            },
            {
                path: "/register",
                element: <div><Register /></div>,
            },
        ],
    },
    // admin routes
    {
        path: "/admin",
        element: <div>Hello admin</div>,
    },
])