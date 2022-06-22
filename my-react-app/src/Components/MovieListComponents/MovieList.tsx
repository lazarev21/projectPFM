import React from 'react'
const URL_TMDB = 'https://image.tmdb.org/t/p/w300'

export function MoviesList ({dataMovieList}){
    return (
        <div className="movie-cart__main">
          {dataMovieList.map((item, index) =>
            <MovieCartItem key={index} title={item.title} raiting={item.vote_average} imgUrl={item.backdrop_path}/>
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