import React from "react"
import { FiltersList } from "./FIlterList"
import { Pagination } from "../Pagination"

export function FilterContainer() {
    return(
      <div className="filter-contaiter">
        <FiltersList />
        <Pagination />
      </div>
    )
  }