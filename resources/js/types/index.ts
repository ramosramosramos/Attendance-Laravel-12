import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
    is_confirmed:boolean
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

export interface SharedTypes{
    id: number;
    name: string;
    updateURL: string;
    deleteURL: string;
    [key:string]: any;
}
export interface Course extends SharedTypes{
    code?: string;
}

export interface Subject extends SharedTypes{

}
export interface Section extends SharedTypes{

}
export interface YearLevel extends SharedTypes{

}
export interface ScheduleProps{
    courses:Course[];
    subjects:Subject[];
    sections: Section[];
    year_levels: YearLevel[];
}



export interface ScheduleForm{
    title: string;
    user_id: number;
    description: string;
    start_time: string;
    end_time: string;
    date: string;
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    course_id: string;
    subject_id: string;
    section_id: string;
    year_level_id: string;
    [key: string]: any;
}
