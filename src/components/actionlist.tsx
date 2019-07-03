import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';

export const ActionList: React.FC<{ actions: React.ReactNode[], list: React.ReactNode[] }> = props => {
    return (
        <>
            {props.list}
            <FlexRow style={{ flex: "none", paddingBottom: "30px" }}>
                {props.actions}
            </FlexRow>
        </>
    );
}