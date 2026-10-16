document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#search-btn');
    const gameInput = document.querySelector('#game-name');
    const gamesContainer = document.querySelector('#games');

    async function searchGames() {
        const name = gameInput.value;

        const response = await fetch(
            "https://api.rawg.io/api/games?key=&search=" + name
        );

        const data = await response.json();

        gamesContainer.innerHTML = "";

        if (data.results.length == 0) {
            gamesContainer.innerHTML = "Ігор не знайдено!";
            return;
        }

        data.results.forEach(function(game) {
            gamesContainer.innerHTML +=
                "<div>" +
                "<h3>" + game.name + "</h3>" +
                "<img src='" + game.background_image + "' width='200'>" +
                "<p>Рейтинг: " + game.rating + "</p>" +
                "</div>";
        });
    }

    searchBtn.addEventListener('click', searchGames);
});