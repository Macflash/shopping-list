import { IItemDefinition } from "./models";

export const LookupItems = (partialName: string): IItemDefinition[] => Items.filter(item => item.name.toLowerCase().includes(partialName.toLowerCase()));

export const GetItem = (fullName: string): IItemDefinition | undefined => Items.find(item => item.name.toLowerCase() == fullName.toLowerCase());

export type Category =
    "Other" |
    "Fruit" |
    "Vegetable" |
    "Meat" |
    "Dairy" |
    "Carbs" |
    "Baking";

export type Packaging =
    "Fresh" |
    "Frozen" |
    "Canned";

const Food = (name: string, category: Category, emoji?: string): IItemDefinition => {
    return { name, category, emoji };
}

const GroundMeat = (name: string): IItemDefinition => {
    return {
        name,
        category: "Meat",
        expirationLenth: 5 // ???
    }
}

const FilletMeat = (name: string, emoji?: string): IItemDefinition => {
    return {
        name,
        category: "Meat",
        expirationLenth: 5,
        emoji,
    }
}

const Lettuce = (name: string): IItemDefinition => {
    return {
        name: `${name} Lettuce`,
        category: "Vegetable",
        expirationLenth: 5,
        emoji: "🥬",
    }
}

const Bread = (name: string, emoji?: string): IItemDefinition => {
    return {
        name,
        category: "Carbs",
        expirationLenth: 7,
        emoji,
    };
}

const BakingItem = (name: string): IItemDefinition => {
    return {
        name,
        category: "Baking",
        expirationLenth: 360 // roughly speaking?
    }
}

export const Items: IItemDefinition[] = [
    // MEAT
    GroundMeat("Ground Beef"),
    GroundMeat("Ground Turkey"),
    GroundMeat("Ground Sausage"),

    FilletMeat("Steak", "🥩"),
    FilletMeat("Chicken Breast"),
    FilletMeat("Bacon", "🥓"),
    FilletMeat("Tuna Fillet"),
    FilletMeat("Salmon Fillet"),

    // Carbs
    {
        name: "Rice",
        category: "Carbs",
        expirationLenth: 180 // optimistic?
    },
    {
        name: "Beans",
        category: "Carbs",
        expirationLenth: 180 // optimistic?
    },
    {
        name: "Potatoes",
        category: "Carbs",
        expirationLenth: 14,
        emoji: "🥔",
    },
    Bread("Whole Wheat Bread", "🍞"),
    Bread("White Bread", "🍞"),
    Bread("Bagels", "🥯"),
    Bread("English Muffins"),

    // VEGGIES
    Lettuce("Romaine"),
    Lettuce("Iceberg"),
    Lettuce("Boston"),
    Lettuce("Red Lead"),
    Lettuce("Spring Mix"),
    {
        name: "Broccoli",
        category: "Vegetable",
        expirationLenth: 6,
        emoji: "🥦",
    },
    {
        name: "Carrots",
        category: "Vegetable",
        expirationLenth: 21,
        emoji: "🥕",
    },

    // DAIRY
    {
        name: "Butter",
        category: "Dairy",
        expirationLenth: 30,
        emoji: "🧈",
    },
    {
        name: "Yogurt",
        category: "Dairy",
        expirationLenth: 6,
        unopenedExpirationLength: 21,
    },
    {
        name: "Greek Yogurt",
        category: "Dairy",
        expirationLenth: 6,
        unopenedExpirationLength: 21,
    },
    {
        name: "Milk",
        category: "Dairy",
        expirationLenth: 7,
    },
    {
        name: "Creamer",
        category: "Dairy",
        expirationLenth: 14,
    },
    {
        name: "Eggs",
        category: "Other",
        expirationLenth: 7,
        emoji: "🥚"
    },

    // Baking Items and Spices
    BakingItem("Flour"),
    BakingItem("Whole Wheat Flour"),
    BakingItem("Sugar"),
    BakingItem("Brown Sugar"),
    BakingItem("Baking Sode"),
    BakingItem("Baking Powder"),
    BakingItem("Corn Starch"),

    BakingItem("Salt"),
    BakingItem("Sea Salt"),
    BakingItem("Pepper"),
    BakingItem("Whole Peppercorn"),
    BakingItem("Cinnamon"),
    BakingItem("Vannilla Extract"),

    BakingItem("Rosemary"),
    BakingItem("Sage"),
    BakingItem("Thyme"),
    BakingItem("Dried Basil"),

    // Saucy boys
    BakingItem("Soy Sauce"),
    BakingItem("Worchestershire Sauce"),
    BakingItem("Balsamic Vinegar"),
    BakingItem("White Vinegar"),
    BakingItem("Red Wine Vinegar"),

];