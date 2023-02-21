//Exercise 3 
//Name : Claudio Lorenzo Loing
//Date : 2 February 2023

// 1. Conversion function from Fahrenheit to Celsius
let fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
};

// 2. Body Mass Index (BMI) calculation function
let calculateBMI = (weight, height) => {
    let bmi = weight / (height * height);
    let result;
    
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }

    console.log(`Your BMI is ${bmi.toFixed(2)} and you are ${result}.`);
};

// Example usage of the functions:
fahrenheitToCelsius(99.20);
// Output: 99.20°F = 37.33°C

calculateBMI(70, 1.75);
// Output: Your BMI is 23.15 and you are Normal.
