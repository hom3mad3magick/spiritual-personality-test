document.getElementById('personality-test').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Example calculation (replace with your own logic)
    const score = Object.values(data).reduce((acc, val) => acc + parseInt(val), 0);

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Your score is: ${score}`;
    
    alert('Thank you for taking the test! Your results are displayed below.');

    // Redirect to homepage
    window.location.href = 'https://www.hom3mad3magick.com';
});
