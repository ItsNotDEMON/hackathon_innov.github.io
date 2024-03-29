const form = document.getElementById('pollForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Saved!");
  form.reset();
  const successMessage = document.createElement('p');
  successMessage.textContent = "Thank you for your feedback!";
  form.appendChild(successMessage);
});