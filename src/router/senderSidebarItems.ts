import createParcel from "@/pages/SenderPages/CreateParcel";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "create a parcel",
        url: "create-parcel",
        isActive: true,
        component: createParcel,
      },
    ],
  },
  // {
  //     title: "Status",
  //     items: [
  //         {
  //             title: "status log",
  //             url: "status-log",
  //             component: About
  //         },
  //     ],
  // },
];
