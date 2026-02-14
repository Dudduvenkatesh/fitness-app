function scrollToPrograms() {
    document.getElementById("programs").scrollIntoView({ behavior: "smooth" });
}

function calculateBMI() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (!height || !weight) {
        result.textContent = "Please enter valid values.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let message = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        message += "You are Underweight.";
    } else if (bmi < 24.9) {
        message += "You are Normal weight.";
    } else if (bmi < 29.9) {
        message += "You are Overweight.";
    } else {
        message += "You are Obese.";
    }

    result.textContent = message;
}

function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}

