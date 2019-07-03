import React from 'react';
import { ShoppingList } from './components/shoppinglist';
import { MenuBar } from './components/menubar';
import { FlexRow } from './components/flexrow';

export type View = "menu" | "list" | "fridge" | "cook";

export interface IMenuItem {
  name: string;
  key: View;
  icon?: string;
}

const App: React.FC = () => {
  const [view, setView] = React.useState<View>("list");
  const menuItems: IMenuItem[] = [
    { key: "list", name: "Shop", icon: "ShoppingCart" },
    { key: "fridge", name: "Fridge", icon: "Door" },
    { key: "cook", name: "Cook", icon: "EatDrink" },
  ];

  let content = null;
  switch (view) {
    case "list":
      content = <ShoppingList />;
  }

  return <FlexRow column>
    <MenuBar menuItems={menuItems} setView={setView} open={!content} />
    {content}
  </FlexRow>;
}

export default App;
