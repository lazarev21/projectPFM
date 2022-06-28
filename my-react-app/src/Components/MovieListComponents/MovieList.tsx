import React, {} from 'react'

import {useSelector} from 'react-redux'

const URL_TMDB = 'https://image.tmdb.org/t/p/w300'

export function MoviesList ({dataMoviesList}){
  const currentPage = useSelector(state => state.currentPageReducer.page)
  const filterDataMoviesList = dataMoviesList.filter(item => item.release_date.slice(0,4) === '2020');

 /*  function compare(a, b) {
  
    const popularityA = a.popularity;
    const popularityB = b.popularity;
  
    let comparison = 0;
    if (popularityA > popularityB) {
      comparison = 1;
    } else if (popularityA < popularityB) {
      comparison = -1;
    }
    return comparison;
  } */
  
  //filterDataMoviesList.sort(compare);

  function sliceDataMoviesListForPage(filterDataMoviesList, currentPage: number) {
    const dataMoviesListPage = filterDataMoviesList.slice(10*(currentPage - 1), 10 * currentPage) 
    return dataMoviesListPage
  }

    return (
        <div className="movie-cart__main">
          {
          sliceDataMoviesListForPage(filterDataMoviesList, currentPage).map((item, index) => 
            <MovieCartItem key={index} title={item.title} raiting={item.vote_average} imgUrl={item.poster_path}/>
          )}
      </div>  
    ) 
  }


function MovieCartItem({title, raiting, imgUrl}) {
    return (
        <div className="movie-cart__main__item">
            <div className="movie-cart__main__poster">
            <img src={URL_TMDB + imgUrl} alt="" className='movie-cart__main__poster_image'/>
            </div>
            <div className="movie-cart__main__description">
            <div className="description__header">
                <div className="description__header__raiting">{`Рейтинг ${raiting}`}</div>
                <div className="description__header__item-favorite">F</div>
                <div className="description__header__bookmark">B</div>
            </div>
            <div className="description__main">
                <p className="description__main__title">{title}</p>
            </div>
            <div className="description__footer">
                <button className="button-read-more">Подробнее</button> 
            </div>
            </div>
        </div>
    )
  }