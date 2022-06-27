import React, {useContext} from "react";
import { PageContext } from "./Container";

export function Pagination() {
    const {currentPage, setCurrentPage, amountPage} = useContext(PageContext)
    function nextPage() {
      setCurrentPage(currentPage + 1)
    }
    function previousPage() { 
      setCurrentPage(currentPage - 1)
    }
    return(
      <div className="pagination">
        <div className="pagination__buttons">
          <button disabled={currentPage===1} className="back-pagination" onClick={() => previousPage() }>Назад</button>
          <button disabled={currentPage===amountPage} className="forvard-pagination" onClick={() => nextPage() }>Вперед</button>
        </div>
        <div className="pagination-pages-info">
          <div className="current-page">{currentPage}</div>
          <div>of</div>
          <div className="total-pages">{amountPage}</div>
        </div>
      </div>
    )
  }
  