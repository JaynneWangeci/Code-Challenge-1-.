// function to estimate transaction fee for sending money via mobile money service
function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015;
  const minFee = 10;
  const maxFee = 70;

  // Calculate 1.5% fee
  let calculatedFee = amountToSend * percentageFee;

  // Apply minimum and maximum fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  // Output the result
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!`);
}

// Prompt user input the user for the amount they want to send
const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(userInput);

if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Tafadhali andika kiasi halali cha kutuma.");
}