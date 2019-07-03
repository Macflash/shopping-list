import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';

export const ShoppingList: React.FC = () => {
    return (
        <div>
            <h3>List</h3>

            <FlexRow>
                <Fabric.Checkbox label="item 1" />
            </FlexRow>

            <FlexRow>
                <Fabric.PrimaryButton text="Add item" iconProps={{ iconName: "Add" }} />
            </FlexRow>
            
        </div>
    );
}