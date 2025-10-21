// import About from "@/layout/About";
import Allparcels from "@/pages/AdminPages/Allparcels";
import { Allusers } from "@/pages/AdminPages/Allusers";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

// const About = lazy(() => import("@/layout/About"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "View all parcels",
        url: "view-all-parcels",
        // isActive: true,
        component: Allparcels,
      },
    ],
  },
  {
    title: "Admin Parcel",
    items: [
      {
        title: "View all users",
        url: "view-all-users",
        component: Allusers,
      },
    ],
  },
];
