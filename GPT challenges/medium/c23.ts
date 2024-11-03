/* Challenge #23: Group Products by Category
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of product objects,
each with name and category properties, and returns a Map
where each key is a category, and the corresponding value is an array of product names in that category.

Requirements:

Define a function called groupProductsByCategory.
It should take an array of objects, each with name and category properties.
Return a Map where each key is a category, and each value is an array of product names in that category. */

interface IProductObjetc {
    name: string;
    category: string;
}

function groupProductsByCategory(productsArr: IProductObjetc[]): Map<string, string[]> {
    const categoriesMap = new Map<string, string[]>();

    productsArr.forEach((product) => {
        if (categoriesMap.has(product.category)) {
            categoriesMap.set(product.category, [
                ...categoriesMap.get(product.category)!,
                product.name,
            ]);
        } else {
            categoriesMap.set(product.category, [product.name]);
        }
    });

    return categoriesMap;
}

console.log(
    groupProductsByCategory([
        { name: "apple", category: "fruits" },
        { name: "carrot", category: "vegetables" },
        { name: "banana", category: "fruits" },
        { name: "lollipop", category: "sweets" },
    ])
);
