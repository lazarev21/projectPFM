import React from "react"
import { GenreCheckboxList } from "./GenreCheckboxList"
import { dataGenre } from "../../data/data_genre"

export function FiltersList() {
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
  