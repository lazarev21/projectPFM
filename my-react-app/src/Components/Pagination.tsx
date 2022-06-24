import React, {useContext} from "react";
import { currentPageContext } from "./Container";

export function Pagination() {
    const {currentPage, setCurrentPage} = useContext(currentPageContext)
    function nextPage() {
      setCurrentPage(currentPage + 1)
    }
    function previousPage() { 
      setCurrentPage(currentPage - 1)
    }
    return(
      <div className="pagination">
        <div className="pagination__buttons">
          <button className="back-pagination" onClick={() => previousPage() }>Назад</button>
          <button className="forvard-pagination" onClick={() => nextPage() }>Вперед</button>
        </div>
        <div className="pagination-pages-info">
          <div className="current-page">{currentPage}</div>
          <div>of</div>
          <div className="total-pages">1455</div>
        </div>
      </div>
    )
  }
  