document.getElementById('career-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);
    const strengths = Array.from(document.getElementById('strengths').selectedOptions).map(option => option.value);

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interests, strengths }),
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (data.error) {
            resultsDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
        } else {
            resultsDiv.innerHTML = `
                <h2>Career Possibilities</h2>
                <p>${data.career_possibilities.join(', ')}</p>
                <h2>Recommended Courses/Subjects</h2>
                <p>${data.recommended_courses.join(', ')}</p>
            `;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
