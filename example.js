// Declaring Vairables
const sample = "Hello World"; //const cannot be given another value
sample = "World" //Hence this won't work

let sampleTwo = "Hello World Two" // let allows you to reassign vallues
sampleTwo = "Hello" // Hence will work

// => Arrow Functions
const employeeName = () => {
    return "John";
}
employeeName();
const employeeNameTwo = (name) => {
    return name;
}
employeeNameTwo("Name")

// For loop
for (let index = 0; index < 10; index++) {
    console.log(index);
}

const array = [1,2,5,6,9,18,27,30]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// Conditional Statements
const age = 30
if(age < 20) {
    console.log("It is a teenager")
}else if(age >= 20 && age < 30) {
    console.log("It's a young adult")
}else {
    console.log("Its an adult")
}

//Callbacks
const getEmployeeData = (cb) => {
    return cb();
}
const employeeDateTwo = () => {
    return "Matthew";
}
getEmployeeData(employeeDateTwo);

// Events
// "Join" run logic --- someother file --- trigger "join"

/*JSON, Arry, Object
Rules of JSON - 
1. Always double quote for key and for strings
2. Any data type is allowed
3. No trailing comma

Methods
1. JSON.stringify
2. JSON.parse
*/

const data = [1,2,3,4,5];
JSON.stringify(data)
const stringifiedData = JSON.stringify(data)
typeof(stringifiedData)
JSON.parse(stringifiedData)

/*
Array - 
const a =[]

Important Methds - 
1. filter
2. find
3. findIndex
4. flat
5. forEach
6. includes
7. indexOf
8. join
9. map
10. pop
11. push
12. reduce
13. reverse
14. shift
15. slice
16. sort
17. splice
18. unshift
*/

/*
Objects - 
const a = {}

const employee = {
    name: "John",
    age: 24,
    address: "Sample Address",
    hobbies: ["Reading", "Cooking", "Gaming"]
};

Important Methods - 
1. entries
2. is
3. keys
4. values
5. hasOwn

*/

