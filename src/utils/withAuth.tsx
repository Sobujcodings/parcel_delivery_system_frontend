import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { Trole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { toast } from "sonner";

export const withAuth = (Component: ComponentType, requiredRole: Trole) => {
    return function authWrapper() {
        const { data, isLoading } = useUserInfoQuery(undefined);
        console.log('inside auth', data);

        // if(isLoading){
        //     console.log('loading...');
        // }

        // need a loading state
        if (!isLoading && !data?.user?.email) {
            toast("You are not Authorized user, login please");
            return <Navigate to="/login" />
        };

        if (!isLoading && requiredRole && data?.user?.role != requiredRole) {
            return <Navigate to="/unauthorized" />
        };

        return <Component />
    }
}