import React, {useState} from "react" 
import { dataMoviesList } from "../data/data-movie-list";
import { FilterContainer } from "./filter-list-components/filterContainer";
import { MoviesList } from "./movie-list-components/movie-list";
import { AuthorizationModal } from "./authorization-modal";


export function Container({modalAuthorizationActive, setModalAuthorizationActive}) {
    return(
      <div className="container">
          <FilterContainer />
          <MoviesList dataMoviesList={dataMoviesList} setModalAuthorizationActive={setModalAuthorizationActive}/>
          <AuthorizationModal modalAuthorizationActive={modalAuthorizationActive} setModalAuthorizationActive={setModalAuthorizationActive}/>
      </div>
    )
  }
