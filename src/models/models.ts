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
    initialStatus: ItemStatus;
    SealedExpirationLength: number; // lets say in days?
    OpenedExpirationLength: number;
}