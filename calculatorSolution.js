function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    return 'Error: ' + error.message; // Handle the error gracefully
  }
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

module.exports = calculator;