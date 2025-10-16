import About from "@/layout/About";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "View parcels",
                url: "view-parcels",
                isActive: true,
                component: About
            },
        ],
    },
    {
        title: "sender",
        items: [
            {
                title: "View sender",
                url: "view",
                component: About
            },
        ],
    },
]