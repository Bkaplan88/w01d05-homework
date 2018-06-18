console.log("Working");

// conceptual questions
// 1:

let thisVariable = 0;

// 2:

thisVariable = "changed";

// 3:

let nextVariable = thisVariable;

// strings
// 1:

let firstVariable = "Hello World";

firstVariable = 1;

let secondVariable = firstVariable;

secondVariable = "my second variable";

console.log(firstVariable);

// 2:

let yourName = "Ben";

console.log("Hello my name is " + yourName);

// Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a < b;
c > d;
"Name" === "Name";
a + b === c;
a * a === d;
e === "Kevin";
48 !== "48";


// The Farm

let animal = "cow";
if (animal === "cow") {
	console.log("MOOOOO!");
} else {
	console.log("Hey you're not a cow!");
}

let personAge = 14;

if (personAge >= 16) {
	console.log("Here are the keys.");

} else {
	console.log("Sorry you're too young.");
}

// Just loop it
// 1:

for (i = 0; i < 11; i++ ) {
	console.log(i);

}

// 2:

for (i = 10; i < 4001; i++) {
	console.log(i);

}

// 3:

for (i = 10; i < 4001; i += 2) {
	console.log(i);
}

// Lets get even

for (i = 1; i < 101; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is an even number`);

	}
}


// Give me five

for (i = 0; i < 101; i++) {
	if (i % 5 === 0) {
		console.log(`${i} High five!`);
	} else if (i % 3 === 0) {
		console.log(`${i} Three is a crowd`);
	}
}

// Savings account
// 1:

let bank_account = 0;

for (i = 1; i < 11; i++) {
	bank_account += i
} 
console.log(bank_account);

// 2:

let raisePay = 0;
let finalPay = 0;
for (i = 1; i < 101; i++) {
	raisePay += i;
    finalPay = raisePay * 2;
	

}
console.log(finalPay);

// Multiples of 3 and 5

let projectEuler = 0;

for (i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		projectEuler += i

	}
}
console.log(projectEuler);

// Easy does it

const quotes = ["Everybody talks about the weather but nobody does anything about it.", "A day without sunshine is like, you know, night.", "Laziness is nothing more than the habit of resting before you are tired."];

console.log(quotes);

// Random

const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);

randomThings[2] = "World";

console.log(randomThings);

// We've got class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

console.log(ourClass[2]);

ourClass[2] = "Octocat";

ourClass.push("cloud city");

console.log(ourClass);

// Mix it up

const myArray = [5 ,10 ,500, 20];

myArray.push("Egon");

console.log(myArray);

myArray.pop();

myArray.unshift("Bob Marley");

console.log(myArray);

myArray.shift();

myArray.reverse("");

console.log(myArray);

// Biggie Smalls

const biggieSmalls = (input) => {
	if (input < 100) {
		console.log("little number");

	} else {
		alert("Big number")
	}
}

biggieSmalls(102);

// Monkey in the middle

const monkeyInTheMiddle = (input) => {
	if (input < 5) {
		console.log("little number");
	} else if (input > 10) {
		console.log("big number");
	} else {
		console.log("monkey");
	}

}

monkeyInTheMiddle(6);

// Whats in your closet

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rocking ${kristynsCloset[2]} today`);

kristynsCloset.shift();

console.log(kristynsCloset);
kristynsCloset.splice(5, 0, "raybans");
console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);


console.log(`Thome is looking fierce in a ${thomsCloset[0][0]} , ${thomsCloset[1][1]} and ${thomsCloset[2][1]} .`);

thomsCloset[1][2] = "footie pajamas";

console.log(thomsCloset);

// print greeting


const printGreeting = (name) => {
	return name;
}

console.log(`Hello there ${printGreeting("Slimer")}`);


// reverse word order

let reverseWord = "";
const reverseWordOrder = (str) => {
	 return str.split(" ").reverse(" ").join(" ");

}

console.log(reverseWordOrder("Ishmael me Call"));

console.log(reverseWordOrder("I use Lancome on my comb"));


// calculate

let sumTotal = 0;
const calculate = (num1, num2, operation) => {
	if(operation === "add") {
		return num1 + num2;

	} else if (operation === "sub") {
		return num1 - num2;

	} else if (operation === "mult") {
		return num1 * num2;

	} else if (operation === "div") {
		return num1 / num2;
	} else if (operation === "exp") {
		return Math.pow(num1, num2);

	} else {
		return false
	}

}

console.log(calculate(4, 3, "exp"));

// 1:

const printCool = (name) => {
	return `${name} is cool`;
}

console.log(printCool("Captain Reynolds"));


// 2:

const calculateCube = (num) => {
	return num * num * num;

}

console.log(calculateCube(5));

// 3:

const isAVowel = (str) => {

	if (str.toLowerCase() === "a" || str.toLowerCase() === "e" || str.toLowerCase() === "i" || str.toLowerCase() === "o" || str.toLowerCase() === "u") {
		return true;
	} else {
		return false;
	}

}

console.log(isAVowel("A"));

// 4:


const getTwoLengths = (str1, str2) => {
	let lenghtArr = [];
	lenghtArr.push(str1.length, str2.length);
	return lenghtArr;

}

console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5:


const getMultipleLengths = (arr) => {
	let sumOfIndex = [];
	for (i = 0; i < arr.length; i++) {
		sumOfIndex.push(arr[i].length);
		}
		return sumOfIndex;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 6:

// still working on this

const maxOfThree = (num1, num2, num3) => {
	if (num1 > num2 && num1 > num3) {
		return num1;

	} else if (num2 > num1 && num2 > num3) {
		return num2;

	} else if (num3 > num1 && num3 > num2) {
		return num3;
	}

}

console.log(maxOfThree(4, 2, 6));


// 7:

// still working on this

const printLongestWord = (arr) => {
	let longestWord = "";
	for (i = 0; i < arr.length; i++) {
		if (arr[i].length >= longestWord.length) {
			longestWord = arr[i];
		} else if (longestWord.length === arr[i].length) {
			longestWord = arr[i - 1];

		}
	
	}

	
	return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// 8:

const transmogrify = (num1, num2, num3) => {

let powerOf = 1;
	for (i = 0; i < num3; i++) {
		powerOf *= num1 * num2;

	}
	return powerOf;
}

console.log(transmogrify(5, 3, 2));


// Objects

// Syntax

const me = {
	name: "Ben",
	age: 29,
	email: "benjaminkaplanart@gmail.com",
}


console.log(me);

console.log(me.name);

me.age = 1000;

console.log(me);

me["place of residence"] = "columbus";
console.log(me);


// Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something",

}

console.log(monster.name);

monster.type = "creature";

monster["age"] = 6;

console.log(monster);

// ogres


// still working on this


const adventurer = {
	name: "Buzz",
	hitpoints: 42,
	weapon: "Sword",
	adventurerAttack() {
		ogre.hitpoints -= 7;
	}
}

const ogre = {
	name: "grunt",
	hitpoints: 51,
	weapon: "Battle Axe",
	ogreAttack() {
		adventurer.hitpoints -= 4;
	}
}



const fight = (input1, input2) => {
	while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
		ogre.ogreAttack();
		console.log(`${ogre.name} attacked ${adventurer.name} with his battle axe for 4 hitpoints.`);
		adventurer.adventurerAttack();
		console.log(`${adventurer.name} attacked ${ogre.name} with his sword for 7 hitpoints`);
			if (adventurer.hitpoints === 0 || ogre.hitpoints === 0) {
				console.log("Game over!")

			}
		}
}

console.log(fight(adventurer, ogre));



// Cat Combinator

const mamaCat = {
	name: "Mildred",
	breed: "Tabby",
	age: 12,
}


const papaCat = {
	name: "Taco",
	breed: "Sphinx",
	age: 2,
}



const combineCats = (mama, papa) => {
	let combinedCats = []
	combinedCats.push(mama, papa);
	return combinedCats;
}

console.log(combineCats(mamaCat, papaCat));




















































































