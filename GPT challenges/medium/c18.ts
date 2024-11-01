/* Challenge #18: Inventory System with Map
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of items, where each item is an object with name and quantity. Return a Map where each item name is a key and its total quantity is the value.

Requirements:

Define a function called inventoryCount.
It should take an array of objects, each with name and quantity properties.
Return a Map where each key is an item name, and the value is the total quantity. */

function inventoryCount(items: { name: string; quantity: number }[]): Map<string, number> {
    const inventoryMap = new Map<string, number>();

    items.forEach((item) => {
        if (inventoryMap.has(item.name)) {
            inventoryMap.set(item.name, inventoryMap.get(item.name)! + item.quantity);
        } else {
            inventoryMap.set(item.name, item.quantity);
        }
    });

    return inventoryMap;
}

const items = [
    { name: "apple", quantity: 3 },
    { name: "banana", quantity: 2 },
    { name: "apple", quantity: 1 },
];

const result = inventoryCount(items);
console.log(result);
