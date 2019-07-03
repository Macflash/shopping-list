export interface IAppState {
    ShoppingList: IShoppingItem[];
}
  
export interface IShoppingItem {
    name: string;
    purchased: boolean;
}