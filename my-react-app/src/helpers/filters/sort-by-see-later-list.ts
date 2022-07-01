import { dataMoviesList } from "../../data/data-movie-list";

export function sortBySeeLaterList() {
  if (localStorage.getItem("seeLaterList")) {
    const seeLaterList = JSON.parse(
      localStorage.getItem("seeLaterList") || "{}"
    );
    const sortedBySeeLaterList = dataMoviesList.filter((item) => {
      return seeLaterList.includes(item.id);
    });
    return sortedBySeeLaterList;
  }
}
