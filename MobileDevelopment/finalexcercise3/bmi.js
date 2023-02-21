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
    return `BMI anda adalah ${bmi.toFixed(2)} , status : ${result}.`;
};
export default calculateBMI;
