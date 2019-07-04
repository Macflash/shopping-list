import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { GetItem } from '../models/items';

export const NameAndEmoji = (name: string): string => {
    let e = GetItem(name);
    let emoji = null;
    if (e) {
        emoji = e.emoji;
    }

    let nameLabel = name;
    if (emoji) {
        nameLabel = `${emoji} ${nameLabel}`;
    }

    return nameLabel;
}

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