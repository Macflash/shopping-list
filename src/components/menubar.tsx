import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IMenuItem, View } from '../App';
import { HeaderRow } from './headerrow';

export const MenuBar: React.FC<{ open?: boolean, menuItems: IMenuItem[], view: View, setView: React.Dispatch<React.SetStateAction<View>> }> = props => {
    const [open, setOpen] = React.useState(false);

    return (
        <FlexRow column={true} style={{ borderBottom: "1px solid lightgrey", backgroundColor: "#F5F5F5", width: "100%", alignItems: "center" }}>
            <FlexRow column style={{ maxWidth: "700px", width: "100%" }}>
                <FlexRow onClick={() => setOpen(!open)} >
                    <Fabric.Icon iconName={props.menuItems.find(i => i.key == props.view)!.icon} />
                    <HeaderRow sub text={props.view} />
                    <Fabric.IconButton style={{ marginLeft: "auto" }} iconProps={{ iconName: "CollapseMenu" }} />
                </FlexRow>
                {props.open || open ?
                    props.menuItems.filter(item => item.key != props.view).map(item =>
                        <FlexRow
                            onClick={() => {
                                setOpen(false);
                                props.setView(item.key);
                            }}
                        >
                            <Fabric.ActionButton
                                iconProps={{ iconName: item.icon }}
                                text={item.key}
                            />
                        </FlexRow>
                    )
                    : null}
            </FlexRow>
        </FlexRow>
    );
}