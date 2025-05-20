import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';
import './Rows.css';

function Rows({ fetchUrl, title, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const base_Url = 'https://image.tmdb.org/t/p/original';

  // Fetch movie data from TMDB when component mounts or fetchUrl changes
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);

        // Remove duplicates by movie ID
        const uniqueMovies = Array.from(
          new Map(request.data.results.map(movie => [movie.id, movie])).values()
        );

        setMovies(uniqueMovies);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchUrl]);

  // Handle poster click to toggle trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get('v');
          console.log(videoId);
          setTrailerUrl(videoId);
        })
        .catch((error) => console.log(error));
    }
  };

  // YouTube embed options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies
          .filter(movie => (isLargeRow ? movie.poster_path : movie.backdrop_path)) // Ensure valid image path
          .map((movie) => (
            <img
              key={movie.id}
              onError={(e) => (e.target.style.display = 'none')}
              onClick={() => handleClick(movie)}
              src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
            />
          ))}
      </div>

      <div style={{ padding: '10px' }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Rows;
