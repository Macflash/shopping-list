import { Category } from "./items";

export type ItemStatus =
    "Unopened" |
    "Opened" |
    "Fresh" |
    "Leftover";

export interface IShoppingItem extends ICategoryItem {
    name: string;
    purchased: boolean;
}

export interface IFridgeItem extends ICategoryItem {
    name: string;
    purchased: Date;
    expires: Date;
    status: ItemStatus;
}

export interface IItemDefinition extends ICategoryItem {
    name: string;
    expirationLenth?: number; // lets say in days?
    unopenedExpirationLength?: number;
}

export interface ICategoryItem {
    category: Category;
}