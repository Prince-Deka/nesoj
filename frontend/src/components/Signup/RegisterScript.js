const form = document.querySelector("form");
const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");
const allInput = document.querySelectorAll(".first input:not([type='file'])");

// New variable for all radio inputs
const allRadioInputs = document.querySelectorAll('input[type="radio"]');

// Function to check if at least one radio button is selected
function isAnyRadioSelected(radioInputs) {
  return Array.from(radioInputs).some(radio => radio.checked);
}

nextBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Check if all text inputs are filled and at least one radio button is selected
  const isAllFilled = Array.from(allInput).every(input => input.value.trim() !== "") && isAnyRadioSelected(allRadioInputs);

  if (isAllFilled) {
    form.classList.add('secActive');
    form.scrollTop = 0; // Scroll to the top of the next page
  } else {
    // Changed to floating alert
    displayAlert("Please fill in all required fields and select an option.");
  }
});

backBtn.addEventListener("click", () => {
  form.classList.remove('secActive');
  form.scrollTop = 0; // Ensure we're at the top of the form when going back
});

// Function to display a floating alert
function displayAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.position = "fixed";
  alertBox.style.left = "50%";
  alertBox.style.top = "20%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.backgroundColor = "red";
  alertBox.style.color = "white";
  alertBox.style.padding = "20px";
  alertBox.style.zIndex = "1000";
  alertBox.style.borderRadius = "8px";
  alertBox.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  document.body.appendChild(alertBox);

  // Remove the alert box after 3 seconds
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 3000);
}


