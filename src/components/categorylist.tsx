import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { ICategoryItem } from '../models/models';
import { Category } from '../models/items';
import { HeaderRow } from './headerrow';

export interface ICategoryListProps<T> {
    items: T[],
    renderItem: (item: T, index: number) => JSX.Element,
}

export class CategoryList<T extends ICategoryItem> extends React.Component<ICategoryListProps<T>> {
    render() {
        // sort the items by category, and add a title when it changes!
        const sortedItems = this.props.items.sort((a, b) => {
            const aCat = a.category || "Other";
            const bCat = b.category || "Other";
            if (aCat < bCat) {
                return -1;
            }
            if (aCat == bCat) {
                return 0;
            }

            return 1;
        });

        const items: JSX.Element[] = [];
        let lastCat: Category | undefined = undefined;
        console.log(sortedItems);
        sortedItems.forEach((item, index) => {
            if (lastCat != item.category) {
                lastCat = item.category;
                items.push(<HeaderRow text={lastCat || "Other"} key={lastCat} />);
            }

            items.push(this.props.renderItem(item, index));
        });

        return <div style={{overflowY: "auto"}}>{items}</div>;
    }
}