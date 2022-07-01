import React from "react"
import { FiltersList } from "./fIlterList"
import { Pagination } from "../pagination"

export function FilterContainer() {
    return(
      <div className="filter-contaiter">
        <FiltersList />
        <Pagination />
      </div>
    )
  }