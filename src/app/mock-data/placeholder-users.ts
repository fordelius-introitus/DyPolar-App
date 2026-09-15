import { User } from "../models/user";

export const PlaceholderUsers: User[] = [
    {
        email: 'teste@email.com',
        password: '123456',
        isMember: false,
        groups: [],
        comp_rate: 0.6
    },
    {
        email: 'admin@email.com',
        password: '123456',
        isMember: true,
        groups: [
            "Estudo da filosofia clássica",
            "Preparação Robótica Competitiva",
            "Maratona de Programação"
        ],
        comp_rate: 1
    }
]
