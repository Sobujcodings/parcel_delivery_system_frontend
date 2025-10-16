
import App from "@/App";
import About from "@/layout/About";
import Contact from "@/layout/Contact";
import Login from "@/layout/Login";
import Register from "@/layout/Register";
import Homepage from "@/pages/Homepages/HomePage";
import { createBrowserRouter, Navigate } from "react-router";
import { generateRoutes } from "@/utils/generateRoutes";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                Component: Homepage ,
                index: true
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
        ],
    },
    // admin routes sender/reciever/admin
    {
        path: '/admin',
        Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/admin/view-all-parcels" /> },
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        path: '/sender',
        // need to validate that by mannually entering the url wont go to the dashboard route if itsnot a valid user loggedIn.
        Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/sender/view-parcels" /> },
            ...generateRoutes(senderSidebarItems)
        ]
    },
    {
        path: '/receiver',
        Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/receiver/incoming-parcels" /> },
            ...generateRoutes(receiverSidebarItems)
        ]
    },
])

// {
//     path: '/sender',
//     Component: DashboardLayout,
//     children: [
//         {
//             path: '/sender/view-all-parcels',
//             element: <div>view all parcels</div>
//         },
//         {
//             path: 'create-parcel',
//             element: <div>create parcel</div>
//         },
//     ]
// },