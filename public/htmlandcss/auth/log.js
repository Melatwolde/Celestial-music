document.addEventListener('DOMContentLoaded', function() {
  const signInButton = document.querySelector('.textfield-parent');

  signInButton.addEventListener('click', async function(event) {
      event.preventDefault(); // Prevent the default form submission

      const email = document.querySelector('.username').value;
      const password = document.querySelector('.username1').value;

      try {
          const response = await fetch('/auth/login', { 
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (response.ok) {
              // Login successful
              console.log(data.message); // Or redirect the user
          } else {
              // Handle errors (e.g., user not found, invalid credentials)
              alert(data.message);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      }
  });
});