import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { nextPageAction, previousPageAction } from "../store/reducers/currentPageReducer";

export function Pagination() {
    const amountPage = 20
    const currentPage = useSelector(state => state.currentPageReducer.page)
    const dispatch = useDispatch()
    const nextPage = () => {
      dispatch(nextPageAction(1))
    }
    const previousPage = () => {
      dispatch(previousPageAction(1))
    }

    return(
      <div className="pagination">
        <div className="pagination__buttons">
          {<button disabled={currentPage ===1} className="back-pagination" onClick={() => previousPage() }>Назад</button>}
          <button className="forvard-pagination" onClick={() => nextPage() }>Вперед</button>
        </div>
        <div className="pagination-pages-info">
          <div className="current-page">{currentPage}</div>
          <div>of</div>
          <div className="total-pages">{amountPage}</div>
        </div>
      </div>
    )
  } 
  