export function addMovieToSeeLaterList(id: number) {
  if (!localStorage.getItem("seeLaterList")) {
    const seeLaterList = [];
    seeLaterList.push(id);
    localStorage.setItem("seeLaterList", JSON.stringify(seeLaterList));
  }
  if (localStorage.getItem("seeLaterList")) {
    const seeLaterList = JSON.parse(
      localStorage.getItem("seeLaterList") || "{}"
    );
    if (!seeLaterList.includes(id)) {
      seeLaterList.push(id);
      localStorage.setItem("seeLaterList", JSON.stringify(seeLaterList));
    }
  }
}
