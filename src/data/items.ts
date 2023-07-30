import { Item } from "../types/Items";

export const items: Item[] = [
    {
        date: new Date(2021, 9, 15), 
        category: "food", 
        title: "McDonalds",
        value: 32.12
    },
    {
        date: new Date(2021, 9, 15), 
        category: "food", 
        title: "Burger King",
        value: 28
    },
    {
        date: new Date(2021, 9, 16), 
        category: "rent", 
        title: "Aluguel Apt.",
        value: 1200
    },
    {
        date: new Date(2021, 9, 18), 
        category: "salary", 
        title: "Salário",
        value: 4500
    },
];
