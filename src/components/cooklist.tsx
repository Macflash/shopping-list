import React from 'react';
import * as Fabric from 'office-ui-fabric-react';
import { FlexRow } from './flexrow';
import { IShoppingItem, IItemDefinition, IFridgeItem } from '../models/models';
import { ItemPicker } from './itemPicker';
import { CategoryList } from './categorylist';
import { ActionList } from './actionlist';
import { Category } from '../models/items';
import { ExpirationRow } from './expirationrow';

type CookListProps = {
    fridgeList: IFridgeItem[];
    setFridgeList: React.Dispatch<React.SetStateAction<IFridgeItem[]>>;
};

export const CookList: React.FC<CookListProps> = props => {

    let margin = "0 5px";

    // we want to get just the closest expiration date items for each category
    const minValues: { [category: string]: Date } = {};

    props.fridgeList.filter(item => new Date(item.expires) > new Date()).forEach(item => {
        let expiry = new Date(item.expires);
        item.expires = expiry;
        if (!minValues[item.category] || minValues[item.category] > expiry) {
            minValues[item.category] = expiry;
        }
    });

    // eh, an ok start
    const mealCategories: Category[] = ["Meat", "Vegetable", "Carbs", "Other"];

    // FYI Date == is reference equality
    const items = props.fridgeList.filter(item => minValues[item.category] == item.expires && mealCategories.includes(item.category));

    return (
        <ActionList
            list={[
                <CategoryList
                    items={items}
                    renderItem={(item, index) =>
                        <ExpirationRow item={item}>
                            <Fabric.Checkbox />
                        </ExpirationRow>}
                />
            ]}

            actions={[]}
        />
    );
}