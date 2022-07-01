import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataMoviesList } from "../data/data-movie-list";
const URL_TMDB = "https://image.tmdb.org/t/p/w300";

export function SingleMoviePage({
  modalAuthorizationActive,
  setModalAuthorizationActive,
}) {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  useEffect(() => {
    const movieData = dataMoviesList.find((item) => item.id === +id);
    setMovieData(movieData);
  }, [id]);

  return (
    <div className="App">
      <div className="">
        <img
          src={URL_TMDB + movieData?.backdrop_path}
          alt=""
          className="movie-cart__main__poster_image"
        />
      </div>
      <div>
        {" "}
        Название: <p> {movieData?.title}</p>{" "}
      </div>
      <div>
        {" "}
        Описание: <p> {movieData?.overview}</p>
      </div>
    </div>
  );
}
