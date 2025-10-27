
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
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constrants/role";
import Unauthorized from "@/pages/Unauthorized";
import type { Trole } from "@/types";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                Component: Homepage,
                index: true
            },
            {
                path: "/about",
                Component: About
                // Component: withAuth(About, role.admin)
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
            {
                path: "/unauthorized",
                Component: Unauthorized
            },
        ],
    },
    
    // admin routes sender/reciever/admin
    // check auth then let it go tothe component
    // need to validate that by mannually entering the url wont go to the dashboard route if itsnot a valid user loggedIn.
    {
        path: '/admin',
        Component: withAuth(DashboardLayout, role.admin as Trole),
        // Component: DashboardLayout,
        children: [
            { index: true, element: <Navigate to="/admin/view-all-parcels" /> },
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        path: '/sender',
        Component: withAuth(DashboardLayout, role.sender as Trole),
        children: [
            { index: true, element: <Navigate to="/sender/create-parcel" /> },
            ...generateRoutes(senderSidebarItems)
        ]
    },
    {
        path: '/receiver',
        Component: withAuth(DashboardLayout, role.receiver as Trole),
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