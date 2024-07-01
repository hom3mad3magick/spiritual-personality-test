document.getElementById('personality-test').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Example calculation (replace with your own logic)
  const score = Object.values(data).reduce((acc, val) => acc + parseInt(val), 0);
  const results = `Your score is ${score}`;

  // Display the results on the screen
  const resultsContainer = document.createElement('div');
  resultsContainer.style.marginTop = '20px';
  resultsContainer.style.padding = '20px';
  resultsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  resultsContainer.style.color = '#fff';
  resultsContainer.style.borderRadius = '10px';
  resultsContainer.innerText = results;

  document.body.appendChild(resultsContainer);

  // Redirect to homepage after displaying results
  setTimeout(() => {
    window.location.href = 'https://www.hom3mad3magick.com';
  }, 5000); // 5 seconds delay
});
