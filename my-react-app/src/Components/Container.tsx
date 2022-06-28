import React, {useState} from "react" 
import { dataMoviesList } from "../data/data_movie-list";
import { FilterContainer } from "./FilterListComponents/FilterContainer";
import { MoviesList } from "./MovieListComponents/MovieList";


export function Container() {
    
    return(
      <div className="container">
        
          <FilterContainer />
          <MoviesList dataMoviesList={dataMoviesList}/>
       
      </div>
    )
  }
