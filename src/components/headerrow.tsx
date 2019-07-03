import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';

export const HeaderRow: React.FC<{ text: string }> = props => {
    return (
        <FlexRow style={{
            fontWeight: 500,
            fontSize: "150%",
        }}>
            {props.text}
        </FlexRow>
    );
}