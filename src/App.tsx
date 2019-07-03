import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { ShoppingList } from './components/shoppinglist';
import { MenuBar } from './components/menubar';
import { FlexRow } from './components/flexrow';
import { HeaderRow } from './components/headerrow';
import { IShoppingItem, IFridgeItem } from './models/models';
import { FridgeList } from './components/fridgelist';

export type View = "Menu" | "Shop" | "Fridge" | "Cook";

export interface IMenuItem {
  key: View;
  icon?: string;
}

const savedView = localStorage.getItem("view-state") || "Shop";
const savedShoppingList = localStorage.getItem("shopping-list") || "[]";
const savedFridgeList = localStorage.getItem("fridge-list") || "[]";

const App: React.FC = () => {
  const [view, setView] = React.useState<View>(savedView as View);

  var x = React.useCallback

  const [shoppingList, setShoppingList] = React.useState<IShoppingItem[]>(JSON.parse(savedShoppingList));
  const [fridgeList, setFridgeList] = React.useState<IFridgeItem[]>(JSON.parse(savedFridgeList));

  // if state has changed save it locally!
  localStorage.setItem("view-state", view);
  localStorage.setItem("shopping-list", JSON.stringify(shoppingList));
  localStorage.setItem("fridge-list", JSON.stringify(fridgeList));

  const menuItems: IMenuItem[] = [
    { key: "Shop", icon: "ShoppingCart" },
    { key: "Fridge", icon: "Door" },
    { key: "Cook", icon: "EatDrink" },
  ];

  let content = null;
  switch (view) {
    case "Shop":
      content = <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        onComplete={() => {
          setFridgeList([
            ...fridgeList,
            ...shoppingList.filter(s => s.purchased).map(
              shoppingItem => {
                let purchased = new Date();
                let expires = new Date();
                expires.setDate(purchased.getDate() + 7);
                const fridgeItem: IFridgeItem = {
                  name: shoppingItem.name,
                  purchased,
                  expires,
                  status: "Fresh"
                };

                return fridgeItem;
              }
            )]);

            setShoppingList([]);
        }}
      />;
      break;
    case "Fridge":
      content = <FridgeList
        fridgeList={fridgeList}
        setFridgeList={setFridgeList}
      />;
      break;
  }

  return <FlexRow column>
    <MenuBar menuItems={menuItems} setView={setView} open={!content} />
    {content ? <HeaderRow text={view} /> : null}
    {content}
  </FlexRow>;
}

export default App;
