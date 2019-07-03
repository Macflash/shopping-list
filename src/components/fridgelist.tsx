import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IShoppingItem, IFridgeItem } from '../models/models';

type FridgeListProps = {
    fridgeList: IFridgeItem[];
    setFridgeList: React.Dispatch<React.SetStateAction<IFridgeItem[]>>;
};

export const FridgeList: React.FC<FridgeListProps> = props => {
    const [text, setText] = React.useState("");
    const [date, setDate] = React.useState(new Date());

    // TODO: not sure if these are good candidates for useCallback or useMemo
    const AddItem = () => {
        let expires = new Date(date);
        expires.setDate(expires.getDate() + 7);
        props.setFridgeList([...props.fridgeList, { name: text, purchased: date, status: "Fresh", expires }]);
        setText("");
    }

    const DeleteItem = (index: number) => {
        let newList = [...props.fridgeList];
        newList.splice(index, 1);
        props.setFridgeList(newList);
    }

    const OpenItem = (index: number, purchased: boolean) => {
        let newList = [...props.fridgeList];
        newList[index] = { ...newList[index], purchased: date };
        props.setFridgeList(newList);
    }


    return (
        <>
            {props.fridgeList.map((item, index) =>
                <FlexRow>
                    <div>{item.name}</div>
                    <div style={{ color: "darkgrey", margin: "0 10px", marginLeft: "auto", fontSize: "80%", fontStyle: "italic" }}>
                        Expires {new Date(item.expires).toLocaleDateString("default", { weekday: "long", day: "numeric", month: "numeric" })}
                    </div>
                    <Fabric.IconButton
                        style={{ marginLeft: undefined }}
                        iconProps={{ iconName: "Delete" }}
                        onClick={() => { DeleteItem(index); }}
                    />
                </FlexRow>
            )}

            {!props.fridgeList || !props.fridgeList.length
                ? <FlexRow style={{justifyContent: "center"}}>Get started by adding some items to your fridge!</FlexRow>
                : null}

            <FlexRow style={{ justifyContent: "space-between" }}>
                <Fabric.DatePicker value={date} onSelectDate={newDate => newDate && setDate(newDate)} />
                <Fabric.TextField value={text} onChange={(e, newValue) => setText(newValue || "")} />
                <Fabric.PrimaryButton
                    text="Add item"
                    iconProps={{ iconName: "Add" }}
                    onClick={AddItem}
                    disabled={!text}
                />
            </FlexRow>
        </>
    );
}