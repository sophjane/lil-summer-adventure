/********************
Variables and Data Types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/



/********************
Variable Mutation and Type Coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/********************
Basic Operators
*/
/*
var now, yearJohn, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// Typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/********************
Operator Precedence
*/
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2 ;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2; // x = x * 2
console.log(x);
x += 10 // x = x + 10
console.log(x);
x++; // x = x +1 // x += 1 
console.log(x);
x--; // x = x - 1 // x -= 1 
console.log(x);
*/



/********************
CODING CHALLENGE 1
*/
/*
var massJohn = 92; // kg
var massMark = 78; // kg
var heightJohn = 1.95; // meters
var heightMark = 1.69; // meters

var BMIJohn = massJohn / (heightJohn * heightJohn);
var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIJohn, BMIMark);

var markHigherBMI = BMIMark > BMIJohn;

console.log(' Is Mark\'s BMI higher than John\'s BMI?' + ' ' + markHigherBMI);
*/



/********************
If / else Statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn = 92; // kg
var massMark = 78; // kg
var heightJohn = 1.95; // meters
var heightMark = 1.69; // meters

var BMIJohn = massJohn / (heightJohn * heightJohn);
var BMIMark = massMark / (heightMark * heightMark);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s ');
} else {
    console.log('John\'s BMI is higher than Mark\'s ');
}

// var markHigherBMI = BMIMark > BMIJohn;
// console.log(' Is Mark\'s BMI higher than John\'s BMI?' + ' ' + markHigherBMI);










































































