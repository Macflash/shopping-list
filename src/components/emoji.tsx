import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { GetItem } from '../models/items';

export const Emoji: React.FC<{ emoji?: string, name?: string }> = props => {
    const margin = "0 5px";
    let e = props.emoji;
    if (!props.emoji && props.name) {
        let defined = GetItem(props.name);
        if (defined) {
            e = defined.emoji
        }
    }
    return e ? <div style={{ margin }}>{e}</div> : null;
}