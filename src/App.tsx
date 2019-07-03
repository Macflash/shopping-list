import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { ShoppingList } from './components/shoppinglist';
import { MenuBar } from './components/menubar';
import { FlexRow } from './components/flexrow';
import { HeaderRow } from './components/headerrow';
import { IShoppingItem, IFridgeItem, ItemStatus } from './models/models';
import { FridgeList } from './components/fridgelist';
import { GetItem } from './models/items';
import { CookList } from './components/cooklist';

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
                const def = GetItem(shoppingItem.name);
                let expirationLength = 7;
                let status: ItemStatus = "Fresh";
                if (def && def.expirationLenth) {
                  expirationLength = def.expirationLenth;
                }
                if (def && def.unopenedExpirationLength) {
                  status = "Unopened";
                }

                let purchased = new Date();
                let expires = new Date();
                expires.setDate(purchased.getDate() + expirationLength);
                const fridgeItem: IFridgeItem = {
                  name: shoppingItem.name,
                  category: shoppingItem.category,
                  purchased,
                  expires,
                  status,
                };

                return fridgeItem;
              }
            )]);

          setShoppingList([]);
          setView("Fridge");
        }}
      />;
      break;
    case "Fridge":
      content = <FridgeList
        fridgeList={fridgeList}
        setFridgeList={setFridgeList}
      />;
      break;
    case "Cook":
      content = <CookList
        fridgeList={fridgeList}
        setFridgeList={setFridgeList}
      />
      break;
  }

  return <FlexRow column style={{ height: "100%", width: "100%", position: "absolute" }}>
    <MenuBar menuItems={menuItems} setView={setView} open={!content} />
    {content ? <HeaderRow text={view} /> : null}
    {content}
  </FlexRow>;
}

export default App;
