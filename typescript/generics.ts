// Generics

// Concepts:
//     Learn how to use generics to write reusable and type-safe code.

//     Exercises:
// Write a function that takes a generic type and returns it.
//    1 Create a generic interface for a list of items.
interface ItemList<T> {
    items: T[]
    add(item: T) :void
    getAll() : T[]
}

//    2 Write a class that accepts a generic type.
class ListOfGenerics<T> implements ItemList<T>{
    items: T[]

    add(item:T) : void {
        this.items.push(item)
    }

    getAll():T[] {
        return this.items
    }
}

//    3 Declare a function that accepts an array of generic type.
function functionWithGeneric<T>(args:T[]) : void {
    args.forEach(arg => {console.log(arg)})
}

//    4 Create a function that returns a promise with a generic type.
function functionWithPromiseGeneric<T>(data:T) : Promise<T> {
    // @ts-ignore
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        },1000)
    })
}

//    5 Write a generic function that filters an array.
function filterArray<T>(arr: T[]) : T[]{
    return arr.filter(item => item !== null)
}

//    6 Define a generic type alias that accepts multiple types.
//    7 Write a generic function with multiple type parameters.
//    8 Create a function that accepts a generic and extends a specific interface.
//    9 Write a function that returns the type of a generic's property.
//    10  Define a generic interface for a service that fetches data.
//     Create a class that uses a generic method.
//     Write a function that accepts a constraint on a generic type.
//     Create a function that swaps the values of two generic types.
//     Write a recursive generic type.
//     Define a generic class that implements an interface.
// Write a generic function with a default type parameter.
// Create a function that uses generics with conditional types.
//     Write a function that accepts a generic type extending Array.
//     Create a utility type that maps over a generic type.