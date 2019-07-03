import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IShoppingItem, IFridgeItem, IItemDefinition } from '../models/models';
import { ItemPicker } from './itemPicker';
import { CategoryList } from './categorylist';
import { ActionList } from './actionlist';

type FridgeListProps = {
    fridgeList: IFridgeItem[];
    setFridgeList: React.Dispatch<React.SetStateAction<IFridgeItem[]>>;
};

export const FridgeList: React.FC<FridgeListProps> = props => {
    const [date, setDate] = React.useState(new Date());

    const AddItem = (item: IItemDefinition) => {
        let expires = new Date(date);
        expires.setDate(expires.getDate() + item.expirationLenth);
        props.setFridgeList([...props.fridgeList, { name: item.name, category: item.category, purchased: date, status: "Fresh", expires }]);
    }

    const DeleteItem = (index: number) => {
        let newList = [...props.fridgeList];
        newList.splice(index, 1);
        props.setFridgeList(newList);
    }

    let margin = "0 5px";

    return (
        <ActionList
            list={[
                <CategoryList
                    items={props.fridgeList}
                    renderItem={(item, index) => <FlexRow>
                        <div>{item.name}</div>
                        <div style={{ color: "darkgrey", margin: "0 10px", marginLeft: "auto", fontSize: "80%", fontStyle: "italic" }}>
                            Expires {new Date(item.expires).toLocaleDateString("default", { weekday: "long", day: "numeric", month: "numeric" })}
                        </div>
                        <Fabric.IconButton
                            style={{ marginLeft: undefined }}
                            iconProps={{ iconName: "Delete" }}
                            onClick={() => { DeleteItem(index); }}
                        />
                    </FlexRow>}
                />

                , !props.fridgeList || !props.fridgeList.length
                    ? <FlexRow style={{ justifyContent: "center", fontWeight: 300 }}>Get started by adding some items to your fridge!</FlexRow>
                    : null
            ]}

            actions={[
                <ItemPicker
                    styles={{ root: { minWidth: "200px", width: "50%", margin, marginLeft: "auto" } }}
                    onAddItem={AddItem}
                />,
                <Fabric.DatePicker
                    style={{ margin, marginRight: "auto" }}
                    value={date}
                    onSelectDate={newDate => newDate && setDate(newDate)}
                />]}
        />
    );
}