export  function sliceDataMoviesListForPages(filterDataMoviesList: string | any[], currentPage: number) {
    const dataMoviesListPage = filterDataMoviesList.slice(10*(currentPage - 1), 10 * currentPage) 
    return dataMoviesListPage
  }