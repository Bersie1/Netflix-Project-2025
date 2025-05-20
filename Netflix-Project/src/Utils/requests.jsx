const API_KEY = "ec989f0bedde5daaaaed42db1c333acb";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US=`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,

};

export default requests; 