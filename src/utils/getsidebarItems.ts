import { role } from "@/constrants/role";
import { adminSidebarItems } from "@/router/adminSidebarItems";
import { receiverSidebarItems } from "@/router/receiverSidebarItems";
import { senderSidebarItems } from "@/router/senderSidebarItems";
import type { Trole } from "@/types";

export const getSidebarItems = (userRole : Trole) => {
    switch (userRole) {
        // case "ADMIN" :
        case role.admin :
            return [...adminSidebarItems, ...senderSidebarItems, ...receiverSidebarItems]
        case role.sender :
            return [...senderSidebarItems]    
        case role.receiver :
            return [...receiverSidebarItems]    
        default:
            break;
    }
}