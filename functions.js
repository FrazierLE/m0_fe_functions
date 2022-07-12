// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting () {
  console.log("Hello");
}
printGreeting();
printGreeting();
printGreeting ();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function myInfo(firstName, lastName, country) {
    console.log(`My name is ${firstName} ${lastName}. My favorite country is ${country}.`);
}
myInfo("john", "doe", "England");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function jobPosting (Company, minPay, maxPay) {
  console.log (`${Company} just posted a job opening with a salary range of ${minPay} to ${maxPay}.`);
}
jobPosting("Hubspot", 90000, 110000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock (inventory, item){
  if (inventory <= 3 && inventory > 0) {console.log(`${item} - running LOW`);}
  else if (inventory > 3) {console.log(`${item} is stocked`);}
  else {console.log(`${item} OUT of stock!`);}
}

checkStock(4, "Coffee")
checkStock(3, "Tortillas");
checkStock(0, "Cheese");
checkStock(1, "Salsa");
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
