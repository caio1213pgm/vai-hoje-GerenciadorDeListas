import * as React from "react";
import { BookUser, ListPlus, TextSearch, Trash2, User } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Criar lista",
            url: "/createList",
            icon: <ListPlus />,
        },
        {
            title: "Ver listas",
            url: "/myLists",
            icon: <TextSearch />,
        },
        {
            title: "Excluir listas",
            url: "/deleteList",
            icon: <Trash2 />,
        },
        {
            title: "Perfil",
            url: "/perfil",
            icon: <User />,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="floating" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <BookUser className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium">
                                        Vai hoje
                                    </span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu className="gap-3">
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <div className="text-xl">
                                        <Link
                                            to={item.url}
                                            className="font-medium"
                                        >
                                            {item.title}
                                        </Link>
                                        {item.icon}
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
