document.addEventListener("DOMContentLoaded", function () {
    async function fetchMovieData() {
        const title = document.getElementById("movieTitle").value;
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=42354376`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "True") {
                document.getElementById("movieInfo").textContent = `Año de lanzamiento: ${data.Year}`;
            } else {
                document.getElementById("movieInfo").textContent = "Película no encontrada.";
            }
        } catch (error) {
            document.getElementById("movieInfo").textContent = "Error al obtener datos.";
        }
    }

    window.fetchMovieData = fetchMovieData;
});
