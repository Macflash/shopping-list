export interface IAppState {
    ShoppingList: IShoppingItem[];
}

export interface IShoppingItem {
    name: string;
    purchased: boolean;
}

export interface IFridgeItem {
    name: string;
    purchased: Date;
    expires: Date;
    status: ItemStatus;
}

export type ItemStatus =
    "Unopened" |
    "Opened" |
    "Fresh" |
    "Leftover";

export type Category =
    "Other" |
    "Fruit" |
    "Vegetable" |
    "Meat" |
    "Dairy" |
    "Grain" |
    "Canned" |
    "Frozen";

export interface IItemDefinition {
    category: Category;
    name: string;
    expirationLenth: number; // lets say in days?
    unopenedExpirationLength?: number;
}