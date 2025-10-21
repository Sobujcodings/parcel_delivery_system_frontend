import About from "@/layout/About";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "create a parcel",
        url: "create-parcel",
        isActive: true,
        component: About,
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
