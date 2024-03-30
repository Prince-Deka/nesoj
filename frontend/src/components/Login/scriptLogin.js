// Get all input fields
var inputFields = document.querySelectorAll('.custom-input-field');

// Add event listeners to the input fields
for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener('input', function() {
    // If the input field is not empty, add the 'has-value' class
    if (this.value) {
      this.classList.add('has-value');
    } 
    // If the input field is empty, remove the 'has-value' class
    else {
      this.classList.remove('has-value');
    }
  });
}
