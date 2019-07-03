import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IMenuItem, View } from '../App';
import { HeaderRow } from './headerrow';

export const MenuBar: React.FC<{ open?: boolean, menuItems: IMenuItem[], view: View, setView: React.Dispatch<React.SetStateAction<View>> }> = props => {
    const [open, setOpen] = React.useState(false);

    const style = { borderBottom: "1px solid lightgrey" };

    return (
        <FlexRow column={true} style={{ backgroundColor: "#F5F5F5" }}>
            <FlexRow style={style}>
                <Fabric.Icon iconName={props.menuItems.find(i => i.key == props.view)!.icon} />
                <HeaderRow sub text={props.view} />
                <Fabric.IconButton style={{ marginLeft: "auto" }} iconProps={{ iconName: "CollapseMenu" }} onClick={() => setOpen(!open)} />
            </FlexRow>
            {props.open || open ?
                props.menuItems.filter(item => item.key != props.view).map(item =>
                    <FlexRow style={style}>
                        <Fabric.ActionButton
                            iconProps={{ iconName: item.icon }}
                            text={item.key}
                            onClick={() => {
                                setOpen(false);
                                props.setView(item.key);
                            }}
                        />
                    </FlexRow>
                )
                : null}
        </FlexRow>
    );
}