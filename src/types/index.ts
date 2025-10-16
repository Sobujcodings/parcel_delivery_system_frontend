import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: { 
    title: string; 
    url: string; 
    component: ComponentType, 
    isActive? : boolean
  }[];
}

export type Trole = "ADMIN" | "SENDER" | "RECEIVER";

