import About from "@/layout/About";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "View incoming parcels",
                url: "incoming-parcel",
                isActive: true,
                component: About
            },
        ],
    },
    {
        title: "receiver",
        items: [
            {
                title: "abc",
                url: "abc",
                component: About
            },
        ],
    },
]