import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IShoppingItem, IItemDefinition } from '../models/models';
import { ItemPicker } from './itemPicker';
import { CategoryList } from './categorylist';
import { ActionList } from './actionlist';

type ShoppingListProps = {
    onComplete: () => void;
    shoppingList: IShoppingItem[];
    setShoppingList: React.Dispatch<React.SetStateAction<IShoppingItem[]>>;
};

export const ShoppingList: React.FC<ShoppingListProps> = props => {
    const AddItem = (item: IItemDefinition) => {
        props.setShoppingList([...props.shoppingList, { name: item.name, category: item.category, purchased: false }]);
    }

    const DeleteItem = (index: number) => {
        let newList = [...props.shoppingList];
        newList.splice(index, 1);
        props.setShoppingList(newList);
    }

    const PurchaseItem = (index: number, purchased: boolean) => {
        let newList = [...props.shoppingList];
        newList[index] = { ...newList[index], purchased };
        props.setShoppingList(newList);
    }

    let margin = "0 5px";

    return (
        <ActionList
            list={[
                <CategoryList
                    items={props.shoppingList}
                    renderItem={(item, index) => <FlexRow>
                        <Fabric.Checkbox
                            label={item.name}
                            checked={item.purchased}
                            onChange={(ev, checked) => {
                                PurchaseItem(index, checked || false);
                            }}
                        />
                        <Fabric.IconButton
                            style={{ marginLeft: "auto" }}
                            iconProps={{ iconName: "Delete" }}
                            onClick={() => { DeleteItem(index); }}
                        />
                    </FlexRow>}
                />,
                !props.shoppingList || !props.shoppingList.length
                    ? <FlexRow style={{ justifyContent: "center", fontWeight: 300 }}>Get started by adding some items to your shopping list!</FlexRow>
                    : null
            ]}

            actions={[
                <ItemPicker
                    styles={{ root: { minWidth: "200px", width: "50%", margin, marginLeft: "auto" } }}
                    onAddItem={AddItem}
                    hiddenItems={props.shoppingList.map(s => s.name)}
                />,
                <Fabric.DefaultButton
                    style={{ margin, marginRight: "auto" }}
                    text="Trip Complete"
                    iconProps={{ iconName: "ShoppingCart" }}
                    onClick={props.onComplete}
                    disabled={props.shoppingList.length < 1 || !props.shoppingList.some(i => i.purchased)}
                />
            ]}
        />
    );
}