// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickme: function() {

//         var self = this
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This box number ' + self.position + ' and it is ' + self.color;
//             alert(str)
//         });
//     }
// }
// box5.clickme();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickme: function() {
//         //usung the es6 arrow function
//         document.querySelector('.green').addEventListener('click', () => {
//             // use template literals from ES6
//             var str = `This box number ${this.position} and it is ${this.color}`;
//             alert(str);
//         });
//     }
// }
// box6.clickme();

// constructors ES5
function Person(name) {
    this.name = name
}

// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark', 'Tapiwa']
new Person('John').myFriends5(friends)

// ES6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark', 'Tapiwa']
new Person('Mike').myFriends6(friends)


//////////// Destructuring /////////////////////////////

// ES5
var john = ['John', 30];
var name = john[0];
var age = john[1];
console.log('ES5', name, age)
// ES6
const [name6, age6] = ['John', 30];
console.log('ES6',name6,age6)

// with objects

const obj = {
    firstName: 'John',
    lastName:   'Smith'
}

const{firstName, lastName} = obj

console.log('Obj',firstName, lastName);

const{firstName: a, lastName: b} = obj
console.log('Obj1',a, b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1984)

console.log('Age', age2, 'YTR', retirement)


// ARRAYS 

const boxes = document.querySelectorAll('.box');
// // ES5
// ////// converting the dom nodelist to an array
// var boxesArr5 = Array.prototype.slice.call(boxes);
// ////// to turn all the nodes into blue
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';    
// });
// loops
// ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
    boxesArr5[i].textContent = 'i changed to blue!';
}
*/

// ES6
 // from will turn nodelist into an Array
boxesArr6 = Array.from(boxes)
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
 
// loop
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'i changed to blue';
}

/// ES5
// find the person with full age of 18 or above
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18
})
console.log('ES5',ages[full.indexOf(true)])

// ES6

console.log('ES6', ages.find(cur => cur >= 18))


// Spread operators

// ES5
// adding numbers in arrays
function addAges(a,b,c,d){
    return a+b+c+d
}
var sum1 = addAges(18,30,12,21)
console.log('first', sum1)

var ages2 = [18,30,12,21];
var sum2 = addAges.apply(null, ages2)
console.log('2nd', sum2)

//ES6 SPEAD OPERATOR
// spread oprator takes an array and converts it to single values

const sum3 = addAges(...ages2)
console.log('Es6', sum3)

//using spread operator on arrays

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,'Tapiwa',...familyMiller];
console.log(bigFamily);

// using spreading operator on a nodelist

const h = document.querySelector('h1');
// selecting all elements with the class box
const boxs = document.querySelectorAll('.box');
// putting all elements in one nodelist 
const all = [h,...boxs];
// converting nodelist to array and change color
Array.from(all).forEach(cur => cur.style.color = 'purple');


////////////REST PARAMETERS
// takes single values and convert them to an array when we call a funtion with multiple parameters

// ES5
function isfullAges5(){
    //console.log(arguments)
    var year = new Date().getFullYear()
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log('ES5', (year - cur) >= 18)
    })

}
isfullAges5(1990,2004,1985)


// ES6

function isfullAges6(...years){
    let year = new Date().getFullYear()
    years.forEach(cur => console.log('ES6',(year - cur) >= 18))
}
isfullAges6(1990,2004,1985)

// rest operator is used in a function declaration and spread used in function call

// ES5
function isfullAges5(limit){
    var year = new Date().getFullYear()
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur){
        console.log('Limit5', (year - cur) >= limit)
    })

}
isfullAges5(21, 1990,2004,1985)


// ES6

function isfullAges6(limit, ...years){
    let year = new Date().getFullYear()
    years.forEach(cur => console.log('limit6',(year - cur) >= limit))
}
isfullAges6(21, 1990,2004,1985)


///////////// DEFAULT PARAMETERS ES6 ///////////////////////
// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'Irish': nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;

    var john = new SmithPerson('John', 1990)
    var emily = new SmithPerson('Emily', '1987','Diaz', 'Spanish')
}
*/

//ES6
// specifying default parameters 
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Irish'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990)
var emily = new SmithPerson('Emily', '1987','Diaz', 'Spanish')


//////////// MAPS ES6
/*
const question = new Map();
question.set('question', 'What is the official name of the latest majaor Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES2015');
question.set('correct', 4);
question.set(true, 'Awesome, that\'s correct');
question.set(false, 'Sorry, wrong answer, try again');

// to get data use get 
console.log(question.get('question'));
// to get length we use size
console.log(question.size);
// to delete we use delete and chose what we want to delete in the arg
question.delete(4)
// to delete all we use clear
question.clear()

// Maps are iterable
// with forEach
question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

for(let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
};

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')))
*/

//////////////////////////////Classes////////////////////////////

//Es5
/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log('Es5 class', age)
}

var john5 = new Person5('John', 1990, 'teacher')
*/
//ES6
/*
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job =job
    }
    calculateAge(){
        let age = new Date().getFullYear - this.yearOfBirth;
        console.log('Es5 class', age)
    }
    // not attached to instances  static classes aare attached to the parent class
    static greeting(){
        console.log('Hey there')
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting()

 class definations are not hoisted unlike function constructors we need to first implement 
a class and we can start using it later in our code 
// we can only add methods to classes not properties
*/


///////Clases &  Subclasses//////////////////////////

// ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log('Es5 class', age)
}
// creating the subconstructor for the person5 constructor
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
// connecting Athlete5 constructor to the Person5 constructor
Athlete5.prototype = Object.create(Person5.prototype)

//**** all methods must be places after connecting constructor to sub
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals)
}
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)

johnAthlete5.calculateAge();
johnAthlete5.wonMedal()

// ES6

class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job =job
    }
    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log('Es5 class', age)
    }
    // not attached to instances  static classes aare attached to the parent class
    static greeting(){
        console.log('Hey there')
    }
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job)
        this.olympicGames = olympicGames
        this.medals = medals
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals)
    }
}

const johnAthlete6 = new Athlete6('John', 1990, swimmer, 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();