export interface User {
    email: string;
    password: string;
    isMember: boolean;
    groups: string[] | null;
    comp_rate: number;
}
