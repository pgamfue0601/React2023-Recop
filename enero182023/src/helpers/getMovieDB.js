const getMovieDB = async () => {
    const apiKey= "55e06dabb3d990defab7815dcab4ee2e";
    const url = `https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

export default getMovieDB;