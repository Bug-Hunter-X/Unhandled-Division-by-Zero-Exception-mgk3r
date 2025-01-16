# Unhandled Division by Zero Exception in JavaScript Calculator

This repository demonstrates an unhandled exception in a simple JavaScript calculator and provides a solution using try...catch.

## Bug

The `divide` function in `calculator.js` does not handle the case where the divisor (`b`) is zero, resulting in an uncaught `Error: Division by zero` exception.

## Solution

The `calculatorSolution.js` file demonstrates a solution using a `try...catch` block to gracefully handle the potential `Error: Division by zero` exception and return a user-friendly message instead of crashing the program. 

This solution is more robust and user-friendly than simply letting the exception terminate the script.