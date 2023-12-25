// Variables are containers for storing data values

// Declaring a variable named 'myVariable' and assigning a value to it
let myVariable = 42;
// 'myVariable' is the variable, and 42 is the value

// You can also change the value stored in a variable
myVariable = 'Hello, JavaScript!';
// Now 'myVariable' holds a different value - a string

// You can declare variables without immediately assigning a value
let anotherVariable;
// 'anotherVariable' is the variable, and it currently holds 'undefined'

// Later, you can assign a value to the variable
anotherVariable = true;
// Now 'anotherVariable' holds a boolean value

// Variables can hold different types of values
let name = 'John';
let age = 30;
let isStudent = false;
// 'name', 'age', and 'isStudent' are variables holding string, number, and boolean values respectively

// naming convention in JavaScript:
// it is no longer valid to use "name" for creating a variable name.
// Use descriptive names that indicate the purpose of the variable
let firstName = 'John'; // Good: Clearly indicates the variable's purpose

// Avoid single-letter names (unless it's a well-known convention like 'i' for loop counters)
let a = 5; // Poor: Not descriptive

// Use camelCase for multi-word variable names
let lastName = 'Doe'; // Good: camelCase is easier to read

// Constants (values that won't change) are usually named in UPPERCASE with underscores
const MAX_VALUE = 100; // Good: Indicates it's a constant and uses underscores

// Use meaningful variable names for booleans
let isLogged = true; // Good: Clearly indicates the variable's purpose

// Avoid reserved keywords for variable names
// For example, 'var', 'let', 'const', 'if', 'else', etc. are reserved keywords and cannot be used as variable names

// Variables should start with a letter, underscore, or dollar sign
let _privateVar = "I'm private"; // Good: Starts with an underscore
let $privateVar = 'this is also possible';

// Variables can contain letters, numbers, underscores, or dollar signs
let user_$123 = 'user'; // Good: Contains numbers

// Be consistent in your naming conventions throughout your code
let favoriteColor = 'blue';
let favouriteColour = 'red'; // Inconsistent spelling

// Use meaningful names for arrays and objects
let studentNames = ['Alice', 'Bob', 'Charlie']; // Good: Descriptive name for an array
let personInfo = { name: 'John', age: 30 }; // Good: Descriptive name for an object
