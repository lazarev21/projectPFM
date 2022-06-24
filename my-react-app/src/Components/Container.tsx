import React, {createContext, useState} from "react" 
import { dataMoviesList } from "../data/data_movie-list";
import { FilterContainer } from "./FilterListComponents/FilterContainer";
import { MoviesList } from "./MovieListComponents/MovieList";

export const currentPageContext = React.createContext();

export function Container() {
    const [currentPage, setCurrentPage] = useState(1)
    return(
      <div className="container">
        <currentPageContext.Provider value={{currentPage, setCurrentPage}}>
          <FilterContainer />
          <MoviesList dataMoviesList={dataMoviesList}/>
        </currentPageContext.Provider>
      </div>
    )
  }