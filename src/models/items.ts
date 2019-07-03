import { IItemDefinition } from "./models";

export const LookupItems = (partialName: string): IItemDefinition[] => Items.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()));

export const GetItem = (fullName: string): IItemDefinition | undefined => Items.find(item => item.name == fullName);

export const Items: IItemDefinition[] = [
    {
        name: "Broccoli",
        category: "Vegetable",
        expirationLenth: 5,
    },
    {
        name: "Lettuce",
        category: "Vegetable",
        expirationLenth: 7,
    },
    {
        name: "Carrots",
        category: "Vegetable",
        expirationLenth: 21,
    },
    {
        name: "Yogurt",
        category: "Dairy",
        expirationLenth: 7,
        unopenedExpirationLength: 21,
    },
    {
        name: "Greek Yogurt",
        category: "Dairy",
        expirationLenth: 7,
        unopenedExpirationLength: 21,
    },
];