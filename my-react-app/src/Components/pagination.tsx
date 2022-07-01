import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPageAction,
  previousPageAction,
} from "../store/reducers/current-pages-reducer";
import { amountPagesAction } from "../store/reducers/amount-page-reducer";

export function Pagination() {
  const currentPage = useSelector((state) => state.currentPageReducer.page);
  const amountPages = useSelector(
    (state) => state.amountPagesReducer.amount_pages
  );
  const dispatch = useDispatch();
  const nextPage = () => {
    dispatch(nextPageAction(1));
  };
  const previousPage = () => {
    dispatch(previousPageAction(1));
  };

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        {
          <button
            disabled={currentPage === 1}
            className="back-pagination"
            onClick={() => previousPage()}
          >
            Назад
          </button>
        }
        <button
          disabled={currentPage === amountPages}
          className="forvard-pagination"
          onClick={() => nextPage()}
        >
          Вперед
        </button>
      </div>
      <div className="pagination-pages-info">
        <div className="current-page">{currentPage}</div>
        <div>of</div>
        <div className="total-pages">{amountPages}</div>
      </div>
    </div>
  );
}
