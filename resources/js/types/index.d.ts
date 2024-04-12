export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Stack {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    img: string;
    title: string;
    desc: string;
    start: string;
    end: string;
    context: string;
    tasks: string;
    conclusions: string;
    url: string;
    github: string;
    category: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    stacks: Stack[];
    projects: Project[];
};
