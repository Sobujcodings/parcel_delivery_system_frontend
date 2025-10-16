// import About from "@/layout/About";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const About = lazy(() => import("@/layout/About"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "View all parcels",
        url: "view-all-parcels",
        isActive: true,
        component: About,
      },
    ],
  },
  {
    title: "admin Parcel",
    items: [
      {
        title: "View all users",
        url: "view-all-users",
        component: About,
      },
    ],
  },
];
