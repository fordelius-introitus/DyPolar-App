import { Group } from "./group";

export interface User {
    email: string;
    password: string;
    isMember: boolean;
    groups: string[] | null;
}
