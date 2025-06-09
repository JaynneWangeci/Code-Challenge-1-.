// Fare calculation function
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // Base fare in KES
    const chargePerKm = 15; // Charge per kilometer in KES

    // Calculate total fare
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // Print the result
    console.log(`The total fare for your trip is: KES ${totalFare}`);
}

// Prompt user for input
const userInput = prompt("Enter the distance of your trip in kilometers:");
const distanceInKm = parseFloat(userInput); // Convert input to a number

// Validate input and calculate fare
if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Please enter a valid distance in kilometers.");
}