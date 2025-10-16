/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { adminSidebarItems } from "@/router/adminSidebarItems"
import { getSidebarItems } from "@/utils/getsidebarItems"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userInfo } = useUserInfoQuery(undefined);
  // console.log('userInfo', userInfo);

  const data = {
    // navMain: adminSidebarItems
    // navMain: getSidebarItems("SENDER")
    navMain: getSidebarItems(userInfo?.user?.role)
  };


  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
        // versions={data.versions}
        // defaultVersion={data.versions[0]}
        />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain?.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
