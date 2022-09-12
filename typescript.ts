type MyList = [string, number, string]
const arr: MyList = ["sa", 2, 2] //error because a string was expected
const arr1: MyList = ["sa", 2, "sa", 2] //error because 3 elems expected

let x = 23; // implicit type definition. If you do an assignment you don't need to explicit define the type
let y: number; // explicit type definition


// Function return value
const foo = (): void => { console.log('foo') }
const foo1 = (): string => "sa"  // implicit return because arrow function in 1 line without brackets
const foo2 = (): string => { return "sa" }