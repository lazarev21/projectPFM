import React from 'react'
import { useState } from 'react'
import poster1 from './img/poster1.jpg'
import './App.css'
import {dataGenre} from './data/data_genre'
import {dataMovieList} from './data/data_movie-list'
import {GenreCheckboxList} from './Components/FilterListComponents/GenreCheckboxList'
import {MoviesList} from './Components/MovieListComponents/MovieList.js'

function App() {

  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  )
}

function Header() {
  return(
    <div className="header">
      <button className="button-header__home">Home</button>
      <button className="button-login">Login</button>
    </div>
  )
}

function Container() {
  return(
    <div className="container">
      <FilterContainer />
      <MoviesList dataMovieList={dataMovieList}/>

    </div>
  )
}

/* function MoviesList () {
  return (
    <div className="movies-list">
    <MovieCart />
    </div>
  )
} */

/* function MovieCart() {
  return(
    <div className="movie-cart__main">
      <div className="movie-cart__main__item">
        <div className="movie-cart__main__poster">
          <img src={poster1} alt="" className='movie-cart__main__poster_image'/>
        </div>
        <div className="movie-cart__main__description">
          <div className="description__header">
            <div className="description__header__raiting">Рейтинг 8.4</div>
            <div className="description__header__item-favorite">F</div>
            <div className="description__header__bookmark">B</div>
          </div>
          <div className="description__main">
            <p className="description__main__title">Истребитель демонов: Поезд "Бесконечный"</p>
          </div>
          <div className="description__footer">
            <button className="button-read-more">Подробнее</button> 
          </div>
        </div>
      </div>

      <div className="movie-cart__main__item">
        <div className="movie-cart__main__poster">
          <img src={poster1} alt="" className='movie-cart__main__poster_image'/>
        </div>
        <div className="movie-cart__main__description">
          <div className="description__header">
            <div className="description__header__raiting">Рейтинг 8.4</div>
            <div className="description__header__item-favorite">F</div>
            <div className="description__header__bookmark">B</div>
          </div>
          <div className="description__main">
            <p className="description__main__title">Истребитель демонов: Поезд "Бесконечный"</p>
          </div>
          <div className="description__footer">
            <button className="button-read-more">Подробнее</button> 
          </div>
        </div>
       </div>

      <div className="movie-cart__main__item"> 
        <div className="movie-cart__main__poster">
          <img src={poster1} alt="" className='movie-cart__main__poster_image'/>
        </div>
        <div className="movie-cart__main__description">
          <div className="description__header">
            <div className="description__header__raiting">Рейтинг 8.4</div>
            <div className="description__header__item-favorite">F</div>
            <div className="description__header__bookmark">B</div>
          </div>
          <div className="description__main">
            <p className="description__main__title">Истребитель демонов: Поезд "Бесконечный"</p>
          </div>
          <div className="description__footer">
            <button className="button-read-more">Подробнее</button> 
          </div>
        </div>
      </div>
    </div>
    
  )
} */

function FilterContainer() {
  return(
    <div className="filter-contaiter">
      <FiltersList />
      <Pagination />
    </div>
  )
}

function FiltersList() {
  return (
    <div className="filter-list">
      <div className="filter-list__title">Фильтры</div>
      <button className="filter-list__button-clear">Сбросить все фильтры</button>
      <div className="filter-list__sorting">
        <div className="sorting__title">
          <p className="">Сортировать по:</p>
        </div>
        <div className="sorting__select">
          <select name="sorting" id="sorting" className="filter-list__select-sorting">
            <option value="popular-descending">Популярные по убывание</option>
            <option value="popular-increasing">Популярные по возрастанию</option>
          </select>
        </div>
      </div>
      <div className="filter-list__realise-date">
        <div className="realise-date__title">
          <p className="">Год релиза:</p>
        </div>
        <div className="realise-date__select">
          <select name="realise-date" id="realise-date" className="filter-list__select-realise-date">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
     <GenreCheckboxList dataGenre={dataGenre} />
    </div>
  )
}



function Pagination() {
  return(
    <div className="pagination">
      <div className="pagination__buttons">
        <button className="back-pagination">Назад</button>
        <button className="forvard-pagination">Вперед</button>
      </div>
      <div className="pagination-pages-info">
        <div className="current-page">1</div>
        <div>of</div>
        <div className="total-pages">1455</div>
      </div>
    </div>
  )
}

export default App
