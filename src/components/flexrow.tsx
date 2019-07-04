import React from 'react';
import * as Fabric from 'office-ui-fabric-react';

export const FlexRow: React.FC<{ onClick?: () => void, fill?: boolean, column?: boolean, style?: any }> = props => {
    return (
        <div
            onClick={props.onClick}
            style={{
                cursor: props.onClick ? "pointer" : undefined,
                display: "flex",
                alignItems: props.column ? undefined : "center",
                padding: props.column ? undefined : "10px",
                flexDirection: props.column ? "column" : "row",
                flex: props.fill ? "auto" : "none",
                ...props.style,
            }}>
            {props.children}
        </div>
    );
}