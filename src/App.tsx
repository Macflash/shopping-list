import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { ShoppingList } from './components/shoppinglist';
import { MenuBar } from './components/menubar';
import { FlexRow } from './components/flexrow';
import { HeaderRow } from './components/headerrow';
import { IShoppingItem } from './models/models';

export type View = "Menu" | "Shop" | "Fridge" | "Cook";

export interface IMenuItem {
  key: View;
  icon?: string;
}

const App: React.FC = () => {
  const [view, setView] = React.useState<View>("Shop");

  const [shoppingList, setShoppingList] = React.useState<IShoppingItem[]>([]);

  const menuItems: IMenuItem[] = [
    { key: "Shop", icon: "ShoppingCart" },
    { key: "Fridge", icon: "Door" },
    { key: "Cook", icon: "EatDrink" },
  ];

  let content = null;
  switch (view) {
    case "Shop":
      content = <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />;
  }

  return <FlexRow column>
    <MenuBar menuItems={menuItems} setView={setView} open={!content} />
    {content ? <HeaderRow text={view} /> : null}
    {content}
  </FlexRow>;
}

export default App;
