import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';

export const ShoppingList: React.FC = () => {
    return (
        <>
            <FlexRow>
                <Fabric.Checkbox label="item 1" />
            </FlexRow>

            <FlexRow style={{justifyContent: "space-around"}}>
                <Fabric.PrimaryButton text="Add item" iconProps={{ iconName: "Add" }} />
                <Fabric.DefaultButton style={{ marginLeft: undefined }} text="Trip Complete" iconProps={{ iconName: "ShoppingCart" }} />
            </FlexRow>
        </>
    );
}