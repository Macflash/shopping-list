import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IMenuItem, View } from '../App';
import { HeaderRow } from './headerrow';

export const MenuBar: React.FC<{ open?: boolean, menuItems: IMenuItem[], view: View, setView: React.Dispatch<React.SetStateAction<View>> }> = props => {
    const [open, setOpen] = React.useState(false);

    const style = { borderBottom: "1px solid lightgrey" };

    return (
        <FlexRow column={true}>
            {props.open || open
                ?
                <>
                    {props.open ? null : <FlexRow style={style}>
                        <Fabric.IconButton iconProps={{ iconName: "CollapseMenu" }} onClick={() => setOpen(false)} />
                    </FlexRow>}
                    {props.menuItems.map(item =>
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
                    )}
                </>
                : <FlexRow style={style}>
                    <Fabric.IconButton iconProps={{ iconName: "CollapseMenu" }} onClick={() => setOpen(true)} />
                    <HeaderRow sub text={props.view} />
                </FlexRow>
            }
        </FlexRow>
    );
}