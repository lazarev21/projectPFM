import {
  SORT_BY_FAVORITES_MOVIES,
  SORT_BY_POPULAR_IN_DESCENDING,
  SORT_BY_POPULAR_IN_INCREASING,
  SORT_BY_SEE_LATER_MOVIES,
} from "../const";
import { sortBySeeFavoritesList } from "./filters/sort-by-favorites-list";
import { sortBySeeLaterList } from "./filters/sort-by-see-later-list";

export function filterDataMoviesList(
  dataMoviesList,
  currentDateRelease,
  currentSorting
) {
  switch (currentSorting) {
    case SORT_BY_POPULAR_IN_INCREASING: {
      const filteredDataMoviesList = dataMoviesList
        .filter((item) => item.release_date.slice(0, 4) === currentDateRelease)
        .sort(compare)
        .reverse();
      return filteredDataMoviesList;
    }
    case SORT_BY_POPULAR_IN_DESCENDING: {
      const filteredDataMoviesList = dataMoviesList
        .filter((item) => item.release_date.slice(0, 4) === currentDateRelease)
        .sort(compare);
      return filteredDataMoviesList;
    }
    case SORT_BY_FAVORITES_MOVIES: {
      if (localStorage.getItem("favoritesList")) {
        const filteredDataMoviesList = sortBySeeFavoritesList();
        return filteredDataMoviesList;
      } else return dataMoviesList;
    }
    default:
      return;
  }
}

function compare(a, b) {
  const popularityA = a.popularity;
  const popularityB = b.popularity;

  let comparison = 0;
  if (popularityA > popularityB) {
    comparison = 1;
  } else if (popularityA < popularityB) {
    comparison = -1;
  }
  return comparison;
}
