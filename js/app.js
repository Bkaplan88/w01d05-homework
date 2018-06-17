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

console.log(`Kristyn is rocking ${kristynsCloset[2]} today!`);













































