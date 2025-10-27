import { IncomingParcel } from "@/pages/ReceiverPages/IncomingParcel";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "View incoming parcels",
                url: "incoming-parcels",
                isActive: true,
                component: IncomingParcel
            },
        ],
    },
]