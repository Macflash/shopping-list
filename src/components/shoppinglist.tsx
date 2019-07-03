import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IShoppingItem } from '../models/models';

type ShoppingListProps = {
    shoppingList: IShoppingItem[];
    setShoppingList: React.Dispatch<React.SetStateAction<IShoppingItem[]>>;
};

export const ShoppingList: React.FC<ShoppingListProps> = props => {
    const [text, setText] = React.useState("");

    const AddItem = () => {
        props.setShoppingList([...props.shoppingList, { name: text, purchased: false }]);
        setText("");
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

    const CompleteTrip = () => {
        console.log("TODO! Complete your shopping trip.")
    }

    return (
        <>
            {props.shoppingList.map((item, index) =>
                <FlexRow>
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
                </FlexRow>
            )}

            <FlexRow style={{ justifyContent: "space-around" }}>
                <Fabric.TextField value={text} onChange={(e, newValue) => setText(newValue || "")} />
                <Fabric.PrimaryButton
                    text="Add item"
                    iconProps={{ iconName: "Add" }}
                    onClick={AddItem}
                    disabled={!text}
                />
                <Fabric.DefaultButton
                    style={{ marginLeft: undefined }}
                    text="Trip Complete"
                    iconProps={{ iconName: "ShoppingCart" }}
                    onClick={CompleteTrip}
                    disabled={props.shoppingList.length < 1 && props.shoppingList.some(i => i.purchased)}
                />
            </FlexRow>
        </>
    );
}