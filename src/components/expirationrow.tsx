import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { GetItem } from '../models/items';
import { IFridgeItem, IShoppingItem } from '../models/models';
import { FlexRow } from './flexrow';
import { Emoji } from './emoji';

export const ExpirationRow: React.FC<{ item: IFridgeItem | IShoppingItem, checked?: boolean, onCheckboxChange?: (ev: any, checked?: boolean) => void }> = props => {
    let margin = "0 10px";
    let expiryContent = null;
    let expiryColor = "darkgrey";
    let textColor = undefined;
    let textDecoration = undefined;

    let fridgeItem = props.item as IFridgeItem;
    if (fridgeItem.expires) {

        let expiryDate = new Date(fridgeItem.expires);
        let expiryString = expiryDate.toLocaleDateString("default", { weekday: "long", day: "numeric", month: "numeric" });

        let longDate = new Date();
        longDate.setDate(longDate.getDate() + 30);

        var closeDate = new Date();
        closeDate.setDate(closeDate.getDate() + 3);

        var currentDate = new Date();

        if (expiryDate <= currentDate) {
            expiryContent = "Expired";
            expiryColor = "red";
            textDecoration = "line-through";
            textColor = "darkgrey";
        }
        else if (expiryDate <= closeDate) {
            expiryColor = "red";
            expiryContent = "Expires " + expiryString;
        }
        else if (expiryDate <= longDate) {
            expiryContent = "Expires " + expiryString;
        }
    }

    let e = GetItem(props.item.name);
    let emoji = null;
    if (e) {
        emoji = e.emoji;
    }

    let nameLabel = props.item.name;
    if (emoji) {
        nameLabel = `${emoji} ${nameLabel}`;
    }

    return <FlexRow>
        {props.onCheckboxChange
            && <Fabric.Checkbox
                checked={props.checked}
                onChange={props.onCheckboxChange}
                label={nameLabel}
            />
        }

        {!props.onCheckboxChange &&
            <>
                <Emoji name={props.item.name} />
                <div style={{ textDecoration, color: textColor }}>{nameLabel}</div>
            </>
        }

        <div style={{
            color: expiryColor,
            margin,
            marginLeft: "auto",
            fontSize: "80%",
            fontStyle: "italic"
        }}>
            {expiryContent}
        </div>
        {props.children}
    </FlexRow>
}