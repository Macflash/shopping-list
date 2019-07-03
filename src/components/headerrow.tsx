import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';

export const HeaderRow: React.FC<{ text: string, sub?: boolean }> = props => {
    return (
        <FlexRow style={{
            padding: props.sub ? "0 10px" : "10px",
            fontWeight: props.sub ? 300 : 500,
            fontSize: props.sub ? "150%" : "125%",
            borderBottom: props.sub ? undefined : "1px solid lightgrey",
        }}>
            {props.text}
        </FlexRow>
    );
}