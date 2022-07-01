import React from "react";
import { MovieCartItem } from "./movie-cart";
import { useSelector, useDispatch } from "react-redux";
import { amountPagesAction } from "../../store/reducers/amount-page-reducer";
import { filterDataMoviesList } from "../../helpers/filter-data-movies-list";
import { sliceDataMoviesListForPages } from "../../helpers/slice-data-movies-list-for-pages";

export function MoviesList({ dataMoviesList, setModalAuthorizationActive }) {
  const currentPage = useSelector((state) => state.currentPageReducer.page);
  const currentDateRelease = useSelector(
    (state) => state.currentDateReleaseReducer.year
  );
  const currentSorting = useSelector(
    (state) => state.currentSortTypeReducer.sortBy
  );
  const isAuth = useSelector((state) => state.authorizationReducer.isAuth);

  const dispatch = useDispatch();
  const amountPages = (value) => {
    dispatch(amountPagesAction(value));
  };
  //amountPages(Math.ceil(filterDataMoviesList.length / 10))
  return (
    <div className="movie-cart__main">
      {sliceDataMoviesListForPages(
        filterDataMoviesList(
          dataMoviesList,
          currentDateRelease,
          currentSorting
        ),
        currentPage
      ).map((item, index) => (
        <MovieCartItem
          id={item.id}
          key={index}
          title={item.title}
          raiting={item.vote_average}
          imgUrl={item.poster_path}
          isAuth={isAuth}
          setModalAuthorizationActive={setModalAuthorizationActive}
        />
      ))}
    </div>
  );
}
