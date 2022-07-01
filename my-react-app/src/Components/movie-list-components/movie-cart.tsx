import React from "react";
import { addMovieToFavoritesList } from "../../helpers/filters/add-movie-to-favorites-list";
import { addMovieToSeeLaterList } from "../../helpers/filters/add-movie-to-see-later-list";
import { dataMoviesList } from "../../data/data-movie-list";
import { Link } from "react-router-dom";

const URL_TMDB = "https://image.tmdb.org/t/p/w300";

export function MovieCartItem({
  id,
  title,
  raiting,
  imgUrl,
  isAuth,
  setModalAuthorizationActive,
}) {
  return (
    <div className="movie-cart__main__item">
      <div className="movie-cart__main__poster">
        <img
          src={URL_TMDB + imgUrl}
          alt=""
          className="movie-cart__main__poster_image"
        />
      </div>
      <div className="movie-cart__main__description">
        <div className="description__header">
          <div className="description__header__raiting">{`Рейтинг ${raiting}`}</div>
          <div
            id={id}
            className="description__header__item-favorite"
            onClick={(event) => {
              isAuth
                ? addMovieToFavoritesList(+event.target.id)
                : setModalAuthorizationActive(true);
            }}
          >
            F
          </div>
          <div
            id={id}
            className="description__header__bookmark"
            onClick={(event) => {
              isAuth
                ? addMovieToSeeLaterList(+event.target.id)
                : setModalAuthorizationActive(true);
            }}
          >
            B
          </div>
        </div>
        <div className="description__main">
          <p className="description__main__title">{title}</p>
        </div>
        <div className="description__footer">
          <button className="button-read-more">
            <Link to={`/movie-page/${id}`}>Подробнее</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
