document.getElementById('personality-test').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Example calculation (replace with your own logic)
    const score = Object.values(data).reduce((acc, val) => acc + parseInt(val), 0);

    // Example email sending logic
    const email = data.email;
    const results = `Your score is ${score}`;
    sendEmail(email, results);

    alert('Thank you for taking the test! Your results will be sent to your email.');
    window.location.href = 'https://hom3mad3magick.com';
});

function sendEmail(email, results) {
    // Implement your email sending logic here
    console.log(`Sending results to ${email}: ${results}`);
}
