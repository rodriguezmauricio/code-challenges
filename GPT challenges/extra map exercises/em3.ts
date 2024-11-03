/* Map Extra Exercise #3: Store Item Prices
Difficulty: 🟢 Easy
Points: 10

Task: Write a function that takes an array of objects,
each with name and price properties, and returns a Map
where each key is the item name, and the value is the price.

Requirements:

Define a function called storeItemPrices.
It should take an array of objects, each with name and price properties.
Return a Map where each key is an item’s name, and the value is its price. */

type priceProps = {
    name: string;
    price: number;
};

function storeItemPrices(objArr: priceProps[]): Map<string, number> {
    const itemPricesMap = new Map<string, number>();

    objArr.forEach((item) => {
        if (itemPricesMap.has(item.name)) {
        } else {
            itemPricesMap.set(item.name, item.price);
        }
    });

    return itemPricesMap;
}

console.log(
    storeItemPrices([
        { name: "apple", price: 1.2 },
        { name: "banana", price: 0.8 },
        { name: "orange", price: 1.5 },
    ])
);
