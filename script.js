// script.js

// Selecting the form element
const form = document.querySelector('#myForm');

// Adding an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Getting the input values
  const nameInput = document.querySelector('#nameInput');
  const emailInput = document.querySelector('#emailInput');
  const messageInput = document.querySelector('#messageInput');

  // Creating an object with the input values
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Sending the form data to the server (mock example)
  fetch('https://example.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    // Displaying a success message to the user
    alert('Form submitted successfully!');

    // Resetting the form inputs
    form.reset();
  })
  .catch(error => {
    // Displaying an error message to the user
    alert('An error occurred while submitting the form. Please try again later.');
    console.error(error);
  });
});