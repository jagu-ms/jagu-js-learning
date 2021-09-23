/* learn and mastering for back end and node.js javascript from elzero and w3school */
/* js is an interpreted language .. js support OOP object oriented programming*/
const D_G = document.getElementById ;

// some js output ""
document.getElementById("h1").innerHTML = "learning js page";
console.log('you will be an expert');
// **learning syntax
// some variables
var x = 5, y = 10 , z = 20;
document.getElementById("computation").innerHTML = z + x * y;
// js camel cases and  case sensetive
var 
    firstName = "osama",
    FirstName = 'mohammed';
document.getElementById("sensetive").innerHTML = firstName;
// condition syntax
if (x === 8) {
    document.getElementById("if").innerHTML = "your condition is true"   
} else {
    document.getElementById("if").innerHTML = "your condition is false"
};

let ricePrice = prompt("how much does rice cost !");

if (ricePrice == 70) {
    alert("this is a good price");
} else if (ricePrice > 70) {
    alert("this too much");
} else {
    alert("this is sheep");
};

// ** variables
/* variables start with letters, underscore, $ 
    var = is js variables keyword
    (=) = assignement operator
    It's a good programming practice to declare all variables at the beginning of a script
    the variable needs a meening for his name
*/
let hardWork , 
// let to declare a variable which you can change its value
    programming;
 hardWork = 4;
 programming = 3;
 const WEEK_DAYS = hardWork + programming; 
 // const to declare a variable which you can not change its value .write the const variable with capital letters leters that way you can find it easily
document.getElementById("work-days").innerHTML = WEEK_DAYS+ " days of work at week" ;/* ; the end of a statement */

 // data types
// all 
//boolean , arrays , objects, strings , undefined, null , not a number NaN ,symbol .
// primitive data types
// numbers
let age = 20 ,pi =3.14;
document.getElementById("numbers").innerHTML = age +" "+ pi ; 

 // strings
let strings = "mohamed and abdelghani";
document.getElementById("strings").innerHTML = strings ;


// null
let Null = null ;
document.getElementById("Null").innerHTML = Null + " to turn the variable empty"; 

// boolean
let boolean = true;
document.getElementById("boolean").innerHTML = boolean + "  the boolean accepte only true or fauls"; 

 //undefined . " undefined" is a reserved word in js don t use it in variables
let Undefined;
document.getElementById("undefined").innerHTML = Undefined ; 

//dataTypes
//referenceTypes
// objects, functions,arrays;
let
    arrays = ["butter 0" ,"rice 1" ,"oliveOil 2", ]
    document.getElementById("arrays").innerHTML = arrays ;


//concatenations
let concatenations = 50+5+ 
                    "<span style = 'color:red'>" + " hadjer " + "<span/>" + 
                    25 + 5 + (50+5) ;// a number after a string will be strings not mass ,and the ()for the mass

document.getElementById("concat").innerHTML = concatenations ;

// conversions
let
    booleanConv = String(boolean),
    ageConv = String(age),
    stringConv = Number(strings);
    document.getElementById("booleanConv").innerHTML = typeof(booleanConv);
    document.getElementById("ageConv").innerHTML = typeof(ageConv);
    document.getElementById("stringConv").innerHTML = typeof(stringConv);

//arithmetic operators 
//reminder
let 
   reminder = 17 % 2;
   document.getElementById("reminder").innerHTML = reminder;
// increment / decrement
let four = 4;
console.log(four++); // i did not know why it didnt work
console.log(--four);

//comparison operators
let comp1 = (4 > 1),
    comp2 = 4 < 1 ,
    comp3 = 4 <= 1,
    comp4 = 1 === "1" , //(===) identity operator  equals value and type
    comp5 = 1 == "1" ,// (==) comparison operator that just focuses on value 
    /* comp5 = 1 = "1" , (=) assignement operator (interpretation) */ 
    comp6 = false == 1 ;
    /* and the logical 
        (!=) doesnt equal the value
        (!==) doesnt equal the value and the data type
        (&&) and   EX :if (age === 18 && name == "mohamed")
        (||) or EX :if (age === 18 || age === 19)
    */

document.getElementById("comp1").innerHTML = comp1 ;
document.getElementById("comp2").innerHTML = comp2 ;
document.getElementById("comp3").innerHTML = comp3 ;
document.getElementById("comp4").innerHTML = comp4 ;
document.getElementById("comp5").innerHTML = comp5 ;
document.getElementById("comp6").innerHTML = comp6 ;

// ternary
function ternary() {

    let ternaryQ = prompt("what is a ternary ?"),
        ternaryAns = ternaryQ === "an if condition" ? "this is right" : "this is not right"  ;
    alert(ternaryAns);
};

// switches

function switches() {
    operaTypeElem = prompt(" know the  operator type elements , logical , comparison, arithmetic , assignement?")
    switch (operaTypeElem) {
        case  "arithmetic":
            alert(" % , ++ ,--");
            break;
        case "comparison" :
            alert(" >,< ,==,===,>=,<=,");
            break;
        case "logical" :
            alert(" && ,||, !=,!==");
            break;
        case "assignement" :
            alert(" = ");
            break;  
        default:
            break;
    }
    
};

// loops 
/// while 
//// with break and continue

function whileF() {
    let ateCalories = 0 ;
    while (true) { 
        addedCalories = Number(prompt(`you ate ${ateCalories} . how much calories do you want to eat more`));
        ateCalories += addedCalories;
        if (isNaN(addedCalories)) continue; 
        else if ( ateCalories > 500) {
            alert(ateCalories + "this enough")
            break;
        }
        if (addedCalories === 0) break;
    }
}

/// mainloop and childeloop
const titles = () => {
    for (let i = 0; i <= 10 ; i++) {
        MainLoop:
        for (let x = 1; x <= 6 ; x++) {
            ChildLoop:
            if (x === 5) {
                break ChildLoop;
            } else if ( i === 7 ) {
                
                continue MainLoop ;
            }
            console.log( i + "-" + x + " title") ;
        };
    };
};


/// do while
function doWhileF() {
    do {
        let i = 2 //<=====
        alert("the difference is that dowhile does what is in it at least one time .It tests after doing it")
        i++
    } while (1 < i) ;// it tests the condition after doing its function
}
/// for
function forF() {
    for (let i = 0; i < 5; i++) {
        alert("you are doing an extra effort, it will repeat five times")
    } ;

};
/// loops get acces on arrays
function loopArray () {
    const carsTypes = ["ram" , " demon" , "chalenger" , "charger" ];
    for (i = 0; i <carsTypes.length ; i++ ) {
        document.getElementById(`loop-array${i}`).innerHTML = carsTypes[i];
    };
};

/// for in 
let habits = {
    reading:"books and blogs",
    sport: " GYM, running and walking",
    learnig: "programming and coran",
    religionPracticing: "prayer, coran, visiting famely" 
};

function forIn() {
        for (arrayNum in habits) {
            console.log(arrayNum + " : " + habits[arrayNum]);
                document.getElementById(arrayNum).innerHTML = arrayNum +" : "+ habits[arrayNum];
        };
};
/// for of ,just for arrays

const loopTypes = ["while" , "for " , "dowhile" , "forIn" , "forOf"];
function forOf() {
    let i = 0;
    for (let loopItem of loopTypes) {
        if (i > loopTypes.length) break;
        console.log(loopItem);
        document.getElementById(`loop${i}`).innerHTML = loopItem ;
        i++;
    };
};

// functions 

/// with parameters and return
//// declaration
const paraReturn = (weight, effort) => { 
    weight =  prompt("your weight");
    effort = prompt("effort level , enter 'high = 42 , low = 28 , medium = 35'");
    alert(weight * effort + " calories ");
    return weight * effort + " calories";
};

//// expression
const expressionFunc = () => {
    alert("the diffrence between declaration and expression is that you can call a declared fucntion anywhere but you can call an expressed function just from the scope that  is in it")
} ;

//// rest and argument parameters
const restParameter = (...collectingNum) => { /* (5454,5454,5454,5454,5454)  collectingNum is   just like an array */
    
    let total = 0 ;
    for (const  num of collectingNum) {
        total += num ;
    };
    alert(total);
};

/// setTimeout and setInterval
var seconds = 0;
const stopwatch = ( ) => {
    setTimeout(function secondsAdderF(){
        seconds++;
        document.getElementById("stopwatch").innerHTML = "seconds : " + seconds + " s";
        setTimeout(secondsAdderF, 1000)
    },1000);
    
}


// ARRAYS
/// add  in the end (send);; // join()
let chat = [],
    stringChat;
    
inputValue = document.getElementById("chat-input").value;
function arrayGlobalF() {
    
    console.log(stringChat);
    stringChat = chat.join(".");
    document.getElementById("messages-area").innerHTML = stringChat ;
}
function addInEnd (inputValue) {
    inputValue = document.getElementById("chat-input").value;
    chat.push(chat.length + " " + inputValue ) ; // the auther method : chat[chat.length] = " hello"
    arrayGlobalF();
};

/// add in the begginning
const addInBeginning = (inputValue) => {
    inputValue = document.getElementById("chat-input").value;
    chat.unshift(chat.length + " " + inputValue);
    arrayGlobalF();
};

// editing
let messageNum,
    deletingMessages,
    newMessagess;
const editing = () => {
    messageNum = document.getElementById("message-num").value;
    deletingMessages = document.getElementById("deleting-messages-num").value;
    newMessagess = document.getElementById("new-messages").value;

    chat.splice(messageNum,deletingMessages,newMessagess);
    arrayGlobalF();
};

// Remove from the
const removeTop = () => {
    inputValue = document.getElementById("chat-input").value;
    chat.shift();
    arrayGlobalF();
};

// Remove form the 
const removeEnd = () => {
    inputValue = document.getElementById("chat-input").value;
    chat.pop();
    arrayGlobalF();
};
// search 
let searchChat = ["hi","good","happy","great"]
const search = () => {
    let searchedMassege = document.getElementById("searched-massege").value,
    searched = searchChat.filter(item => item == searchedMassege);
    console.log(searched);
};


/// OBJECTS

const object = {
    name : "mohamed",
    surName : "abdollah",
    colors : {
        car : "red and black",
        house : "black",
        bad : "red and black"
    },
    objectFucntion : say = () => {
        console.log("i can also do functions")
    }
};
document.getElementById("objects").innerHTML = "object.colors.car = " + object.colors.car;

// objects.Constructor
function ConstructorF(colors, cars, names) { // <== capital letter for constructor function
    this.lovedColors = colors;
    this.lovedCars = cars;
    this.lovedNames = names;
    this.favouriteCar = function () {
        if(this.favCarCondition()) {
            alert("this is your favourite car !!!");
        };

    };
    this.favCarCondition = function () {
        return cars === "ram";
    };
};

let constrArray = {
    firstChoose : new  ConstructorF("red", "ram", "aisha"),
    secondChoose : new  ConstructorF("black", "chalenger", "mohamed")
};

const obConstrF = () => {
    console.log(constrArray);
};

// objects.add delete elements
//add
const objectAddF = () => {
    constrArray.house = "farm , programming room , horses";
};
//delete
const objectDeleteF = () => {
    delete    constrArray.house ;
};
// enumeration propreties
let messageObject = {
    mohamed: "how",
    hadjer: "are you"
};
for (const propreti in messageObject) {
    console.log(propreti, messageObject[propreti]);
    document.getElementById("message-object").innerHTML = propreti + " " + messageObject[propreti] ;
};

//abstraction => privite propreties !!
function AbstrObjectF(colors, cars, names) { // <== capital letter for constructor function
    this.lovedColors = colors;
    this.lovedCars = cars;
    this.lovedNames = names;
    // so for abstraction which means that the function workes just in the object instead of the next example
    this.favouriteCar = function () {
        if(favCarCondition()) {
            alert("this is your favourite car !!!");
        };

    };
    let favCarCondition = function () {
        return cars === "ram";
    };
    let carPrise =  20000 + "$";

    Object.defineProperty(this, "carPrise", {
        get: function () { return carPrise}, // for  accessing the carPrise property out from the object ! (the getter)
        set: function (value) {carPrise = value} // for make the possibility of change the property value from another place
    });


    
    /*   this.favouriteCar = function () {
        if(this.favCarCondition()) {
            alert("this is your favourite car !!!");
        };

        };
        this.favCarCondition = function () {
            return cars === "ram";
        }; */
};
const excution = new AbstrObjectF("yellow" , "ram", "ibrahim");

//objects.protoype => the is many things that you need to remember for this lesson


// CLASSES it is just a good way for working with objects

//static function in classes
class MealsRecomendation {
    constructor(firstMeal, secondMeal, thirdMeal) {
        this.morning = firstMeal,
        this.noon = secondMeal,
        this.afterNoon = thirdMeal
    };
    here() { // this function was defined in the prototype "the father " witch mean that you can call it from the constructed object
        console.log("here we can define a few functions in the class")
    };
    static notHere() {console.log("this is just the class function")}; // you can call it from the class name.

    


};
const mealExcution = new MealsRecomendation("rise, oliveOil", "salad , pototo", "rise ,butter");


class Sum {
    static sum (...sumNum) {
        let totalSum = 0;
        for (let num of sumNum) {
            totalSum += num;
        };
        console.log(totalSum);
    };
};


//classes.getters and setters
class MealsRecomendation1 {
    constructor(firstMeal, secondMeal, thirdMeal) {
        this.morning = firstMeal,
        this._noon = secondMeal, // (_) it means that this property is privite
        this._afterNoon = thirdMeal
    }
    
    //classes.getters and setters
    //get afterNoon() {return this._afterNoon}
    //set afterNoon(value) { this._afterNoon = value} // turn iف to a comment so this property will be privite for this object and unchangeable 

    
};
const mealExcution1 = new MealsRecomendation1("rise,  oliveOil", "salad , pototo", "rise ,butter two spones");

//classes.inheritance

class Goals {
    constructor(goalTime, goalPriority){
        this.time = goalTime,
        this.priority = goalPriority
    }
    motivationalWord(){console.log(`be committed with ${this.time}`)};
};

class Programming extends Goals {
    constructor(goalTime, goalPriority, languages){
    super(goalTime, goalPriority)
    this.goalLanguages = languages
    }
    
};

class Coran extends Goals {
    constructor(goalTime, goalPriority, quantity){
        super(goalTime, goalPriority)
        this.coranQuantity = quantity
    }
    //method overriding
    motivationalWord(){console.log(`be committed with ${this.time}`)};
}

const coranExcution = new Coran ("1 h  a day", "the first ", " 2.5 hisb a day" );
const programmingExcution = new Programming ("5 h  a day", "the third ", " javascript" );


//ERRORS HANDLING
//errors handling.try then catch
//errors handling.throw errors
function goodWeight (length) {
    if (isNaN(length)) {throw new Error("are you kidding me! is it possible to calculate a weight with a string !!");}
    let yourWeight = length - 100;
    return `you good weight is ${yourWeight} KG`;
}
//errors handling.promise => is in types food website
//errors handling.async and await
const wait = waitedTime => new Promise(
    (resolve, reject) => {
        
        if(waitedTime > 10000) reject("we can\'t wait all this period.");
        setTimeout(resolve, waitedTime )
    }
)
wait(4000)
    .then(() => {
        console.log("hi mohamed");
        return wait(4000)
        
    })
    .then(() => console.log("this is a promise example"))
    .catch(err => console.log(err))

async function asyncAwaitEx() {
    await wait(3000)
    console.log("hi mohamed")
    await wait(4000)
    console.log("this is the async and await example")
}





