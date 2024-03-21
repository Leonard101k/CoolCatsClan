const catImagesContainer = document.getElementById('catImages');

fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
        headers: {
            'x-api-key': 'live_0aBxoTzHeQo58VwyojmAm0sbOUPrFKiIz7Klmz2Ybg7vQitFyb2N9HLA01bf0sII'
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            const img = document.createElement('img');
            img.src = cat.url;
            catImagesContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error fetching cat images:', error);
    });
const funFacts = [
    "Cats sleep for about 70% of their lives.",
    "The average cat can jump five times its height in a single bound.",
    "Cats have a specialized collarbone that allows them to always land on their feet.",
    "Cats have a strong aversion to anything citrus."
];

const funFactsList = document.getElementById('funFacts');
funFacts.forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact;
    funFactsList.appendChild(li);
});