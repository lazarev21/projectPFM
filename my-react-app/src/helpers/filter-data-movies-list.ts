export function filterDataMoviesList(dataMoviesList, currentDateRelease){
    function compare(a, b) {
  
      const popularityA =   a.popularity;
      const popularityB = b.popularity;
    
      let comparison = 0;
      if (popularityA > popularityB) {
        comparison = 1;
      } else if (popularityA < popularityB) {
        comparison = -1;
      }
      return comparison;
    } 
    const filteredDataMoviesList = dataMoviesList.filter(item => item.release_date.slice(0,4) === currentDateRelease).sort(compare);
    return filteredDataMoviesList
  }