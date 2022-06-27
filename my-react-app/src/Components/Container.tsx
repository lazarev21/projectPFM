import React, {useState} from "react" 
import { dataMoviesList } from "../data/data_movie-list";
import { FilterContainer } from "./FilterListComponents/FilterContainer";
import { MoviesList } from "./MovieListComponents/MovieList";

export const PageContext = React.createContext();

export function Container() {
    const [currentPage, setCurrentPage] = useState(1)
    const [amountPage, setAmountPage] = useState(Math.ceil(dataMoviesList.length/10))
    const [moviesReleaseDate, setMoviesReleaseDateSorting] = useState(2020)

    return(
      <div className="container">
        <PageContext.Provider value={{currentPage, setCurrentPage, moviesReleaseDate, setMoviesReleaseDateSorting, amountPage, setAmountPage}}>
          <FilterContainer />
          <MoviesList dataMoviesList={dataMoviesList}/>
        </PageContext.Provider>
      </div>
    )
  }
