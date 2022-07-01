export function addMovieToFavoritesList(id: number) {
  if (!localStorage.getItem("favoritesList")) {
    const FavoritesList = [];
    FavoritesList.push(id);
    localStorage.setItem("favoritesList", JSON.stringify(FavoritesList));
  }
  if (localStorage.getItem("favoritesList")) {
    const FavoritesList = JSON.parse(
      localStorage.getItem("favoritesList") || "{}"
    );
    if (!FavoritesList.includes(id)) {
      FavoritesList.push(id);
      localStorage.setItem("favoritesList", JSON.stringify(FavoritesList));
    }
  }
}
