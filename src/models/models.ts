import { Category } from "./items";

export type ItemStatus =
    "Unopened" |
    "Opened" |
    "Fresh" |
    "Frozen" |
    "Leftover";

export interface IShoppingItem extends ICategoryItem {
    purchased: boolean;
}

export interface IFridgeItem extends ICategoryItem {
    purchased: Date;
    expires: Date;
    status: ItemStatus;
}

export interface IItemDefinition extends ICategoryItem {
    expirationLenth?: number; // lets say in days?
    unopenedExpirationLength?: number;
}

export interface ICategoryItem {
    name: string;
    category: Category;
    emoji?: string;
}