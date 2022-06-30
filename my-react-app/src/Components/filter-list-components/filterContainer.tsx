import React from "react"
import { FiltersList } from "./fIlterList"
import { Pagination } from "../gagination"

export function FilterContainer() {
    return(
      <div className="filter-contaiter">
        <FiltersList />
        <Pagination />
      </div>
    )
  }