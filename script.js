// Global Execution Context
let age = 20;  // Step 1: Global variable

// Step 2: Function to display age
function displayAge() {
  console.log("Age inside displayAge():", age);
}

// Step 3: Function to update the global variable
function changeAge() {
  age = 25;  // updating global variable
  console.log("Age updated inside changeAge():", age);
}

// Calling the functions
displayAge();   // Shows the global variable value
changeAge();    // Updates the global variable
displayAge();   // Shows updated value