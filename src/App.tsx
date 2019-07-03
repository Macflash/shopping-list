import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { ShoppingList } from './components/shoppinglist';
import { MenuBar } from './components/menubar';
import { FlexRow } from './components/flexrow';
import { HeaderRow } from './components/headerrow';

export type View = "Menu" | "Shop" | "Fridge" | "Cook";

export interface IMenuItem {
  key: View;
  icon?: string;
}

const App: React.FC = () => {
  const [view, setView] = React.useState<View>("Shop");
  const menuItems: IMenuItem[] = [
    { key: "Shop", icon: "ShoppingCart" },
    { key: "Fridge", icon: "Door" },
    { key: "Cook", icon: "EatDrink" },
  ];

  let content = null;
  switch (view) {
    case "Shop":
      content = 
      <>
          <FlexRow>
              <Fabric.Checkbox label="item 1" />
          </FlexRow>

          <FlexRow style={{justifyContent: "space-around"}}>
              <Fabric.PrimaryButton text="Add item" iconProps={{ iconName: "Add" }} />
              <Fabric.DefaultButton style={{ marginLeft: undefined }} text="Trip Complete" iconProps={{ iconName: "ShoppingCart" }} />
          </FlexRow>
      </>;
  }

  return <FlexRow column>
    <MenuBar menuItems={menuItems} setView={setView} open={!content} />
    {content ? <HeaderRow text={view} /> : null}
    {content}
  </FlexRow>;
}

export default App;
