import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
    baseURL:string;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface Link{
    label:string;
    active:boolean;
    url:string
}

export interface Meta{
    links:Link[];
}
export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}


export interface Schedule {
    id: string;
    title: string;
    description:string;
    backgoundColor: string;
    borderColor: string;
    textColor: string;
    start_time: string;
    start_end: string;
    date: string;
    [key: string]: any;
}

export interface Student{
    id: number;
    name:string;
    course:string;
    year_level:string;
    created_at:string;

    [key: string]: any;

}
