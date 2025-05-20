import React from "react";
import Rows from "../Rows/rows"; // Ensure correct path and file name
import requests from "../../Utils/requests"; // Corrected lowercase

const RowList = () => {
  return (
    <>
      <Rows
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRows={true}
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} /> */}
      <Rows title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      {/* <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Rows title="Drama Movies" fetchUrl={requests.fetchDramaMovie} />
      <Rows title="Family Movies" fetchUrl={requests.fetchFamiluMovie} /> */}
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Rows title="TV Shows" fetchUrl={requests.fetchTvShow} /> */}
      
    </>
  );
};

export default RowList;
