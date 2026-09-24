export interface User {
    email: string;
    password: string;
    isMember: boolean;
    groups: string[];
    comp_rate: number;
}
