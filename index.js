function checkAge() {
    const age = document.getElementById("ageInput").value;
    const result = document.getElementById("result");
  
    if (age === "") {
        result.textContent = "Please enter your age.";
    } else if (age < 18) {
      result.textContent = "You are a minor.";
    } else if (age >= 18 && age < 60) {
      result.textContent = "You are an adult.";
    } else if (age > 100) {
      result.textContent = "You should be dead right now !";
    } else if (age >= 60 && age <=100) {
      result.textContent = "You are a senior.";
    } else {
      result.textContent = "Please enter a valid age.";
    }
}
  
