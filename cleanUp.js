// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// I added semi-colons at the end of the parenthesis.


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
console.log(first + second + third);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//Switched sum in the console.log with first + second + third. I don't know if that's better but when I ran the code in replit before changing it ran fine so maybe this is an improvement. 

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
 }
makeFreshPesto();
//Spelled out function


//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;
  console.log(num1 + num2);
  console.log(`the average is: ${avg}.`);
  }
  average (6, 4);
  //console.log(num1+num2d); in order to figure out the average. Put period inside back ticks. Added semi colons. Then added an argument and the function call.
