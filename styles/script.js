document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "live_0aBxoTzHeQo58VwyojmAm0sbOUPrFKiIz7Klmz2Ybg7vQitFyb2N9HLA01bf0sII";
    const slideBanner = document.getElementById("slide-banner");

    // Fetch cat images for the slide banner
    fetch(`https://api.thecatapi.com/v1/images/search?limit=3&page=1&order=Desc`, {
            headers: {
                "x-api-key": apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach((cat, index) => {
                const catImage = document.createElement("img");
                catImage.src = cat.url;
                catImage.classList.add("slide-img");
                if (index === 0) {
                    catImage.classList.add("active");
                }
                slideBanner.appendChild(catImage);
            });

            const slideImages = document.querySelectorAll(".slide-img");
            let currentIndex = 0;

            setInterval(() => {
                // Remove active class from current image
                slideImages[currentIndex].classList.remove("active");

                // Move to the next image
                currentIndex = (currentIndex + 1) % slideImages.length;

                // Add active class to the next image
                slideImages[currentIndex].classList.add("active");
            }, 10000); // Change slide every 10 seconds
        })
        .catch(error => console.error("Error fetching cat images:", error));
});
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "live_0aBxoTzHeQo58VwyojmAm0sbOUPrFKiIz7Klmz2Ybg7vQitFyb2N9HLA01bf0sII";
    const catGallery = document.querySelector(".cat-gallery");

    // Fetch cat images for the gallery in the "About" section
    fetch(`https://api.thecatapi.com/v1/images/search?limit=6&page=1&order=Desc`, {
            headers: {
                "x-api-key": apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(cat => {
                const catImage = document.createElement("img");
                catImage.src = cat.url;
                catImage.alt = "Cat";
                catGallery.appendChild(catImage);
            });
        })
        .catch(error => console.error("Error fetching cat images:", error));
});
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "live_0aBxoTzHeQo58VwyojmAm0sbOUPrFKiIz7Klmz2Ybg7vQitFyb2N9HLA01bf0sII";
    const catGallery = document.querySelector(".cat-gallery");

    // Fetch cat images for the gallery in the "About" section
    fetch(`https://api.thecatapi.com/v1/images/search?limit=6&page=1&order=Desc`, {
            headers: {
                "x-api-key": apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(cat => {
                const catImage = document.createElement("img");
                catImage.src = cat.url;
                catImage.alt = "Cat";
                catGallery.appendChild(catImage);
            });
        })
        .catch(error => console.error("Error fetching cat images:", error));
});