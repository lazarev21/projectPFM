import { dataMoviesList } from "../../data/data-movie-list";
export function sortBySeeFavoritesList() {
  if (localStorage.getItem("favoritesList")) {
    const favoritesList = JSON.parse(
      localStorage.getItem("favoritesList") || "{}"
    );
    const sortedByFavoritesList = dataMoviesList.filter((item) => {
      return favoritesList.includes(item.id);
    });
    return sortedByFavoritesList;
  }
}
