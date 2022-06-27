import React, {useState, useContext, useEffect} from 'react'
import { PageContext } from '../Container'

const URL_TMDB = 'https://image.tmdb.org/t/p/w300'

export function MoviesList ({dataMoviesList}){

  const {currentPage, moviesReleaseDate, setAmountPage} = useContext(PageContext)
  //тут делаю новый массив, отфильтровав по дате
  const filterDataMoviesList = dataMoviesList.filter(item => item.release_date.slice(0,4) === moviesReleaseDate.toString());
  setAmountPage(Math.ceil(filterDataMoviesList.length/10))
  //тут забираю его, чтобы отрезать кусок из 10 карточек фильма
  function sliceDataMoviesListForPage(filterDataMoviesList, currentPage) {
  const dataMoviesListPage = filterDataMoviesList.slice(10*(currentPage - 1), 10 * currentPage) 
  return dataMoviesListPage
  }
  //тут рендерю эти 10 карточек
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