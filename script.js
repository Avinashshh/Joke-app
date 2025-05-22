const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Programming?type=single';

// Create a function to fetch and display the joke
function getJoke() {
    fetch(JOKE_API_URL)
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke-text');

            if (data.joke) {
                jokeContainer.textContent = data.joke;
            } else {
                jokeContainer.textContent = "Oops! Couldn't fetch a joke.";
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById('joke-text').textContent = "Failed to fetch joke.";
        });
}
