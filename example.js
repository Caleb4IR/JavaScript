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