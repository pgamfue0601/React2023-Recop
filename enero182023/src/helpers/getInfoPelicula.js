const getInfoPelicula = async (idPelicula) => {
    const apiKey = "55e06dabb3d990defab7815dcab4ee2e";
    const url = `https://api.themoviedb.org/3/movie/${idPelicula}?&language=es-es&api_key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default getInfoPelicula;