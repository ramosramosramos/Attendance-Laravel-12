import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {LayoutGrid,Calendar1Icon ,Users,Circle} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: route('dashboard'),
        baseURL: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Schedules',
        url: route('schedules.index'),
        baseURL: '/schedules',
        icon: Calendar1Icon,
    },
    {
        title: 'Students',
        url: route('students.index'),
        baseURL: '/students',
        icon: Users,
    },

];

const footerNavItems: NavItem[] = [
    {
        title: 'Courses',
        url: route('courses.index'),
        baseURL: '/courses',
        icon: Circle,
    },
    {
        title: 'Subjects',
        url: route('subjects.index'),
        baseURL: '/subjects',
        icon: Circle,
    },
    {
        title: 'Sections',
        url: route('sections.index'),
        baseURL: '/sections',
        icon: Circle,
    },
    {
        title: 'Year Levels',
        url: route('year_levels.index'),
        baseURL: '/year_levels',
        icon: Circle,
    },
    {
        title: 'Rooms',
        url: route('rooms.index'),
        baseURL: '/rooms',
        icon: Circle,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard"  prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
