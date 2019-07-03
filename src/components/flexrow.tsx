import React from 'react';
import * as Fabric from 'office-ui-fabric-react';

export const FlexRow: React.FC<{ fill?: boolean, column?: boolean, style?: any }> = props => {
    return (
        <div style={{
            display: "flex",
            alignItems: props.column ? undefined : "center",
            padding: props.column ? undefined : "10px",
            flexDirection: props.column ? "column" : "row",
            flex: props.fill ? "auto" : "none",
            ...props.style
        }}>
            {props.children}
        </div>
    );
}