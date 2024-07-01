document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                document.getElementById('message').innerText = 'Sign up successful!';
            } else {
                const error = await response.json();
                document.getElementById('message').innerText = error.message;
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('message').innerText = 'An error occurred. Please try again later.';
        }
    });
});
