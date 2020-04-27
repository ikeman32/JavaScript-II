// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let msg = "";
counting = 0;

const counterThing = () => {


    return () => {
        return `${msg = "Current count is:"}, ${++counting}`;

    }
};
const newThing = counterThing();
console.log("my closure", newThing());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
    // IMPLEMENTATION OF counterMaker:
    // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
    // 2- Declare a function `counter`. It should increment and return `count`.
    //      NOTE: This `counter` function, being nested inside `counterMaker`,
    //      "closes over" the `count` variable. It can "see" it in the parent scope!
    // 3- Return the `counter` function.
    let count = 0;
    return () => {

        return count += 1;
    }

};

const newCounter = counterMaker();

console.log("counter", newCounter());
console.log("counter", newCounter());
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
let cnt = 0;
const limit = 2;

const uglyCounter = () => {


    return () => {
        if (cnt < limit) {
            return ++cnt;
        } else {
            cnt = -1;
            return "Limit Reached";
        }
    }
};
const newUgly = uglyCounter();
console.log(newUgly());
console.log(newUgly());
console.log(newUgly());
console.log(newUgly());
console.log(newUgly());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let toCount = 0;
    return counter = {
        up: () => {
            return ++toCount;
        },
        down: () => {
            return --toCount;
        }

    };

};

const newFact = counterFactory();

console.log("object counting up\n\n", newFact.up());
console.log(newFact.up());
console.log(newFact.up());
console.log(newFact.up());
console.log("object counting down\n\n", newFact.down());
console.log(newFact.down());