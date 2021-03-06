import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { LookupItems, GetItem } from '../models/items';
import { IItemDefinition } from '../models/models';
import { Emoji } from './emoji';
import { FlexRow } from './flexrow';

export const ItemPicker: React.FC<{
    styles: Fabric.IStyleFunction<Fabric.IBasePickerStyleProps, Fabric.IBasePickerStyles> | Partial<Fabric.IBasePickerStyles> | undefined,
    onAddItem: (item: IItemDefinition) => void,
    hiddenItems?: string[],
}> = props => {
    return (
        <Fabric.TagPicker
            searchingText="Searching..."
            styles={props.styles}
            onValidateInput={input => Fabric.ValidationState.valid}
            onRenderSuggestionsItem={(props, itemProps) =>
                <FlexRow>
                    <div>{props.name}</div>
                    <Emoji name={props.name} />
                </FlexRow>}
            onResolveSuggestions={filter => {
                let items = LookupItems(filter).filter(i => {
                    if (props.hiddenItems && props.hiddenItems.some(hiddenName => hiddenName == i.name)) {
                        return false;
                    }

                    return true;
                }).map(i => {
                    var tag: Fabric.ITag = {
                        key: i.name,
                        name: i.name,
                    }

                    return tag;
                });

                if (filter && filter.length) {
                    items = items.concat({ key: filter, name: filter });
                }

                return items;
            }}
            onItemSelected={selectedItem => {
                if (selectedItem) {
                    let definedItem = GetItem(selectedItem.name);
                    props.onAddItem(definedItem || {
                        name: selectedItem.name,
                        category: "Other"
                    });
                }

                return null;
            }}
        />
    );
}