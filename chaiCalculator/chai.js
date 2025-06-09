function calculateChaiIngridents(numberOfCups) {
    //Ingridents ratio per cup
    const waterPerCup = 200; // in ml
    const milkPerCup = 50; // in ml
    const teaLeavesPerCup = 1; // tablespoon
    const sugarPerCup = 2; //  teaspoons

    // calculate total ingredients
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeavesPerCup =  teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
    // print the results
    console.log(`To make ${numberOfCups} cup(s) of chai, you will need:`);
    console.log(` - ${totalWater} ml of water`);
    console.log(` - ${totalMilk} ml of milk`);
    console.log(` - ${totalTeaLeavesPerCup} tablespoon of tea leaves`);
    console.log(` - ${totalSugar} teaspoons of sugar`);
}

// Prompt the user for the number of cups
const userInput = prompt("Enter the number of chai cups you want to make:");
const numberOfCups = Number(userInput);
// Validate input and call the function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngridents(numberOfCups);
}
else {
    console.log;("Please enter a valid number of cups.");
}